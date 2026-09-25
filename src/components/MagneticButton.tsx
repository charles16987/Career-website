import React, { useRef, useState, useCallback } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Maximum offset in pixels (default: 6px for 4-8px range)
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 7,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center normalized (-1 to 1)
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp between -strength and +strength (4-8px range)
      const moveX = Math.max(-strength, Math.min(strength, deltaX * strength));
      const moveY = Math.max(-strength, Math.min(strength, deltaY * strength));

      setPosition({ x: moveX, y: moveY });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 
          ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' 
          : 'transform 0.12s ease-out',
      }}
      className={`group relative cursor-pointer select-none will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
