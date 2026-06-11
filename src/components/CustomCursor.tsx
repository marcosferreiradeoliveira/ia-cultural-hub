import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hiddenData, setHiddenData] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = (event.target as HTMLElement).closest('[data-cursor-data]');
      setHiddenData(target?.getAttribute('data-cursor-data') ?? null);
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="custom-cursor pointer-events-none fixed z-[9999]"
      style={{ left: position.x, top: position.y }}
      aria-hidden
    >
      <div className="custom-cursor-crosshair" />
      <div className="custom-cursor-dot" />
      <div className="custom-cursor-coords font-mono text-[9px] text-terminal-green uppercase tracking-widest">
        X:{Math.round(position.x)} Y:{Math.round(position.y)}
      </div>
      {hiddenData && (
        <div className="custom-cursor-data font-mono text-[10px] text-gold">
          {hiddenData}
        </div>
      )}
    </div>
  );
};
