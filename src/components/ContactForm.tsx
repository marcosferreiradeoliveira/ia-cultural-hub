import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from '@/lib/emailjs';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          name,
          email,
          message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success('Mensagem enviada!', {
        description: 'Obrigado pelo contato. Responderei em breve.',
      });
      form.reset();
    } catch {
      toast.error('Não foi possível enviar', {
        description: 'Tente novamente ou entre em contato pelo WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-5 rounded-2xl border border-border/30 bg-card/40 p-6 text-left backdrop-blur-sm sm:p-8"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome"
          required
          disabled={isSubmitting}
          className="glass-morphism border-border/40"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
          disabled={isSubmitting}
          className="glass-morphism border-border/40"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Como posso ajudar?"
          rows={5}
          required
          disabled={isSubmitting}
          className="glass-morphism min-h-[120px] border-border/40"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
};
