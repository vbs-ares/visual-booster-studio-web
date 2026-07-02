import type { Transition, Variants } from "framer-motion";

export const motionDurations = {
  fast: 0.15,
  normal: 0.22,
  slow: 0.32,
  slower: 0.52,
  drift: 5.2
} as const;

export const motionEasing = {
  standard: [0.2, 0, 0, 1],
  emphasized: [0.16, 1, 0.3, 1],
  enter: [0, 0, 0.2, 1],
  exit: [0.4, 0, 1, 1]
} as const;

export const defaultTransition: Transition = {
  duration: motionDurations.slow,
  ease: motionEasing.emphasized
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition }
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: defaultTransition }
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: defaultTransition }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: motionDurations.normal, ease: motionEasing.standard }
  }
} satisfies Variants;

export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: motionDurations.fast, ease: motionEasing.standard }
  },
  tap: {
    scale: 0.98,
    transition: { duration: motionDurations.fast, ease: motionEasing.standard }
  }
} satisfies Variants;

export const imageFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: motionDurations.drift,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

export const glowPulse: Variants = {
  initial: { opacity: 0.45, scale: 1 },
  animate: {
    opacity: [0.45, 0.85, 0.45],
    scale: [1, 1.025, 1],
    transition: {
      duration: 2.8,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};
