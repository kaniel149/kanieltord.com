import type { Variants } from 'framer-motion'

// Premium easing curves
const smooth: number[] = [0.22, 1, 0.36, 1]
const snappy: number[] = [0.16, 1, 0.3, 1]

// === FADE + BLUR ===

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: smooth,
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(20px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.9,
      ease: smooth,
    },
  },
}

// === STAGGER CONTAINERS ===

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: smooth,
    },
  },
}

// === SCALE ===

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: smooth,
    },
  },
}

// === PHOTO / IMAGE ===

export const photoReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    filter: 'blur(20px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: smooth,
    },
  },
}

// === SLIDE ===

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: smooth,
    },
  },
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: smooth,
    },
  },
}

// === TEXT REVEAL (line-by-line with overflow hidden parent) ===

export const lineReveal: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: snappy,
    },
  },
}

// === LINE GROW (section dividers) ===

export const lineGrow: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: smooth,
    },
  },
}
