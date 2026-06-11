import { useEffect, useRef, useState } from 'react';

interface TypeOnScrollProps {
  text: string;
  className?: string;
  speed?: number;
  as?: 'p' | 'span' | 'h2' | 'h3';
}

export const TypeOnScroll = ({
  text,
  className = '',
  speed = 18,
  as: Tag = 'p',
}: TypeOnScrollProps) => {
  const ref = useRef<HTMLElement>(null);
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return;

        let index = 0;
        intervalId = setInterval(() => {
          index += 1;
          setDisplayed(text.slice(0, index));
          if (index >= text.length) {
            setDone(true);
            if (intervalId) clearInterval(intervalId);
          }
        }, speed);
      },
      { threshold: 0.35, rootMargin: '-40px' }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, done]);

  return (
    <Tag ref={ref as never} className={className}>
      {displayed}
      {!done && displayed.length > 0 && (
        <span className="type-cursor inline-block w-2 h-4 bg-terminal-green ml-0.5 align-middle animate-pulse" />
      )}
    </Tag>
  );
};
