interface CaseConcretoProps {
  children: string;
  className?: string;
}

export const CaseConcreto = ({ children, className = '' }: CaseConcretoProps) => (
  <p className={`case-concreto font-mono text-xs text-foreground/90 leading-relaxed mt-5 border-l border-digital-gold/50 pl-4 ${className}`}>
    <span className="text-gold uppercase text-[10px] tracking-widest block mb-2">
      ↳ Concreto
    </span>
    {children}
  </p>
);
