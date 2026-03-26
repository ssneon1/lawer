import React, { ReactNode } from 'react';

interface ScrollytellingStepProps {
  children: ReactNode;
  stickyContent?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

interface ScrollytellingProps {
  children: React.ReactElement<ScrollytellingStepProps>[];
  className?: string;
}

/**
 * ScrollytellingStep Component
 * Individual step in a scrollytelling narrative
 */
export const ScrollytellingStep: React.FC<ScrollytellingStepProps> = ({
  children,
  stickyContent,
  backgroundColor = 'bg-legal-white',
  textColor = 'text-legal-black',
  className = '',
}) => {
  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-4 md:px-8 ${backgroundColor} ${className}`}
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {stickyContent ? (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={textColor}>
              {children}
            </div>
            <div className="sticky top-1/2 transform -translate-y-1/2 h-96 md:h-[500px] flex items-center justify-center">
              {stickyContent}
            </div>
          </div>
        ) : (
          <div className={`${textColor} text-center`}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Scrollytelling Component
 * Creates a story-driven scrolling experience with:
 * - Parallax backgrounds
 * - Scroll-triggered transitions
 * - Pinned/sticky sections
 * - Smooth motion
 */
export const Scrollytelling: React.FC<ScrollytellingProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
};

/**
 * ScrollytellingTitle Component
 * Special title section for scrollytelling intro
 */
interface ScrollytellingTitleProps {
  title: string;
  subtitle?: string;
  backgroundGradient?: string;
  className?: string;
}

export const ScrollytellingTitle: React.FC<ScrollytellingTitleProps> = ({
  title,
  subtitle,
  backgroundGradient = 'from-legal-black to-gray-900',
  className = '',
}) => {
  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient} animate-fadeIn`}
      />

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-legal-yellow rounded-full mix-blend-overlay animate-pulse opacity-20" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-legal-yellow rounded-full mix-blend-overlay animate-pulse opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 text-center max-w-4xl mx-auto">
        <div className="animate-slideInUp">
          <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold font-serif text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slideInUp animation-delay-200">
              {subtitle}
            </p>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
          <p className="text-gray-400 text-sm mb-4">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ScrollytellingImage Component
 * Animated image with parallax effect
 */
interface ScrollytellingImageProps {
  src: string;
  alt: string;
  parallaxSpeed?: number;
  className?: string;
}

export const ScrollytellingImage: React.FC<ScrollytellingImageProps> = ({
  src,
  alt,
  parallaxSpeed = 0.5,
  className = '',
}) => {
  const parallaxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = parallaxRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const scrollY = window.scrollY;
      const elementTop = element.offsetTop;
      const distance = scrollY - elementTop;
      const parallaxDistance = distance * parallaxSpeed;

      element.style.transform = `translateY(${parallaxDistance}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed]);

  return (
    <div
      ref={parallaxRef}
      className={`relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg brutalist-shadow ${className}`}
      style={{ willChange: 'transform' }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};
