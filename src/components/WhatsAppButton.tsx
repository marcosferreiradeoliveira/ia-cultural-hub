const WHATSAPP_URL = 'https://wa.me/5521992113485';

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="no-glitch fixed bottom-6 right-6 z-50 font-mono text-[10px] uppercase tracking-[0.2em] border border-terminal-green/60 bg-black/90 px-4 py-3 text-terminal-green shadow-lg transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_hsl(43_76%_48%_/_0.25)]"
    >
      [ // WA ]
    </a>
  );
};
