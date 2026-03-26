import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollTriggerProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotate';
  threshold?: number;
  triggerOffset?: number;
  duration?: number;
  delay?: number;
  className?: string;
  staggerChildren?: boolean;
}

export const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  animation = 'fadeIn',
  threshold = 0,
  triggerOffset = 100,
  duration = 600,
  delay = 0,
  className = '',
  staggerChildren = false,
}) => {
  const { elementRef, isInView, progress } = useScrollAnimation({
    threshold,
    triggerOffset,
  });

  const getAnimationStyle = () => {
    const baseStyle: React.CSSProperties = {
      transitionDuration: `${duration}ms`,
      willChange: 'opacity, transform',
    };

    if (!isInView) {
      switch (animation) {
        case 'slideUp':
          return { ...baseStyle, opacity: 0, transform: 'translateY(40px)' };
        case 'slideDown':
          return { ...baseStyle, opacity: 0, transform: 'translateY(-40px)' };
        case 'slideLeft':
          return { ...baseStyle, opacity: 0, transform: 'translateX(40px)' };
        case 'slideRight':
          return { ...baseStyle, opacity: 0, transform: 'translateX(-40px)' };
        case 'scaleIn':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.9)' };
        case 'rotate':
          return { ...baseStyle, opacity: 0, transform: 'rotate(-5deg) scale(0.9)' };
        case 'fadeIn':
        default:
          return { ...baseStyle, opacity: 0 };
      }
    }

    // Element is in view
    return {
      ...baseStyle,
      opacity: 1,
      transform: 'none',
      transitionDelay: `${delay}ms`,
    };
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={getAnimationStyle()}
    >
      {staggerChildren && React.isValidElement(children) ? (
        React.cloneElement(children, {
          children: React.Children.map(
            children.props.children,
            (child, idx) => (
              <div
                key={idx}
                style={{
                  transitionDelay: `${delay + idx * 100}ms`,
                }}
              >
                {child}
              </div>
            )
          ),
        })
      ) : (
        children
      )}
    </div>
  );
};
