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
      className="custom-cursor fixed z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}
    >
      <div className={`relative transition-transform duration-100 ${isPointer ? 'scale-125' : ''}`}>
        <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm" />
        <div className="relative bg-white w-3 h-3 rounded-full border border-blue-500" />
      </div>
    </div>
  );
}
