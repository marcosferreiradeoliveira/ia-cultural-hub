import { FormEvent, useRef, useState } from 'react';
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

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      toast.success('Mensagem enviada!', {
        description: 'Obrigado pelo contato. Responderei em breve.',
      });
      formRef.current.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'object' && error !== null && 'text' in error
            ? String((error as { text: string }).text)
            : 'Erro desconhecido';

      toast.error('Não foi possível enviar', {
        description: message.includes('recipient')
          ? 'Configure o e-mail destinatário no template do EmailJS.'
          : 'Tente novamente ou entre em contato pelo WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-5 rounded-2xl border border-border/30 bg-card/40 p-6 text-left backdrop-blur-sm sm:p-8"
    >
      <div className="space-y-2">
        <label htmlFor="user_name" className="text-sm font-medium text-foreground">
          Nome
        </label>
        <Input
          id="user_name"
          name="user_name"
          type="text"
          placeholder="Seu nome"
          required
          disabled={isSubmitting}
          className="glass-morphism border-border/40"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="user_email" className="text-sm font-medium text-foreground">
          E-mail
        </label>
        <Input
          id="user_email"
          name="user_email"
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
