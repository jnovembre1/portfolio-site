// components/CustomCursor.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { FaMousePointer } from 'react-icons/fa';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      // center wrapper under pointer
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onOver = (e: PointerEvent) => {
      const target = (e.target as Element).closest('a, button, input, textarea');
      if (target) {
        setHovering(true);
      }
    };

    const onOut = (e: PointerEvent) => {
      const target = (e.target as Element).closest('a, button, input, textarea');
      if (target) {
        setHovering(false);
      }
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor-wrapper ${isHovering ? 'hovered' : ''}`}
    >
      <div className="cursor-glow" />
      <FaMousePointer className="cursor-icon" />
    </div>
  );
}
