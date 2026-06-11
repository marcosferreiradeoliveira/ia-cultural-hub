import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Button } from '@/components/Button';
import { useI18n } from '@/i18n';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from '@/lib/emailjs';

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

export const ContactForm = () => {
  const { t } = useI18n();
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

      toast.success(t.contact.form.successTitle, {
        description: t.contact.form.successDesc,
      });
      formRef.current.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'object' && error !== null && 'text' in error
            ? String((error as { text: string }).text)
            : 'unknown';

      toast.error(t.contact.form.errorTitle, {
        description: message.includes('recipient')
          ? t.contact.form.errorRecipient
          : t.contact.form.errorGeneric,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="conexao-terminal mx-auto max-w-2xl text-left border border-border/60 bg-black overflow-hidden"
    >
      <div className="conexao-terminal-bar flex items-center gap-2 px-4 py-2 border-b border-border/40 bg-muted/20">
        <span className="w-2.5 h-2.5 rounded-full bg-red-900/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-900/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-900/80" />
        <span className="ml-3 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          conexao.sh — estabelecer_link
        </span>
      </div>

      <div className="conexao-terminal-body p-6 sm:p-8 font-mono text-sm space-y-8">
        <p className="text-terminal-green text-xs">
          {t.contact.form.init}
        </p>

        <div className="conexao-field">
          <label htmlFor="user_name" className="conexao-prompt">
            <span className="text-terminal-green">&gt;</span> {t.contact.form.name}
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            disabled={isSubmitting}
            autoComplete="name"
            placeholder="______________________________"
            className="conexao-input"
          />
        </div>

        <div className="conexao-field">
          <label htmlFor="user_email" className="conexao-prompt">
            <span className="text-terminal-green">&gt;</span> {t.contact.form.email}
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            disabled={isSubmitting}
            autoComplete="email"
            placeholder="______________________________"
            className="conexao-input"
          />
        </div>

        <div className="conexao-field">
          <label htmlFor="message" className="conexao-prompt">
            <span className="text-terminal-green">&gt;</span> {t.contact.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={isSubmitting}
            rows={4}
            placeholder={t.contact.form.placeholder}
            className="conexao-input conexao-input--area"
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto tracking-[0.12em] no-glitch"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
          </Button>
        </div>

        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
          {t.contact.form.protocol}
        </p>
      </div>
    </form>
  );
};
