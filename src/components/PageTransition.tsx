import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  delay?: number;
}

export const PageTransition = ({ children, delay = 0 }: PageTransitionProps) => {
  return (
    <div
      className="animate-slideInUp"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const SectionTransition = ({
  children,
  delay = 0,
  direction = "up",
}: SectionTransitionProps) => {
  const animationClass = {
    up: "animate-slideInUp",
    down: "animate-slideInDown",
    left: "animate-slideInLeft",
    right: "animate-slideInRight",
  }[direction];

  return (
    <div
      className={animationClass}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface ElementTransitionProps {
  children: ReactNode;
  delay?: number;
}

export const ElementTransition = ({
  children,
  delay = 0,
}: ElementTransitionProps) => {
  return (
    <div
      className="animate-scaleIn"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
