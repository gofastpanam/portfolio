import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const element = document.elementFromPoint(position.x, position.y);
      const isClickable = element?.matches('a, button, [role="button"], input, select, textarea');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', (e) => {
      updatePosition(e);
      updateCursorType();
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [position.x, position.y]);

  return (
    <div
      className={`custom-cursor fixed z-[9999] pointer-events-none transition-transform duration-100 ${
        isPointer ? 'scale-125' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm" />
        <div className="relative bg-white w-4 h-4 rounded-full border-2 border-blue-500" />
      </div>
    </div>
  );
}
