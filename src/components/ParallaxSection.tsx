import React, { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  speed?: number;
  height?: string;
  minHeight?: string;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  speed = 0.5,
  height = '100vh',
  minHeight = 'auto',
  className = '',
}) => {
  const parallaxRef = useParallax({ speed, direction: 'up' });

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        height,
        minHeight,
      }}
    >
      {/* Parallax Background */}
      {backgroundImage && (
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            willChange: 'transform',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
