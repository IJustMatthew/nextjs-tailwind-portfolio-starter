// Global animations for motion components
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export const fadeInTop = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export const fadeInBottom = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

// Blog list animation - Sequence of items
export const blogListAnimation = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      duration: 0.5
    }
  }
}

export const blogCardAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

// Section title
export const sectionTitleAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      duration: 1
    }
  }
}

export const bgTextAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
}

export const mainText1Animation = {
  hidden: { x: -50, scale: 1.2, opacity: 0 },
  visible: { x: 0, scale: 1, opacity: 1 }
}

export const mainText2Animation = {
  hidden: { x: 50, scale: 1.2, opacity: 0 },
  visible: { x: 0, scale: 1, opacity: 1 }
}

// Experience and Schools line
export const experienceItemAnimation = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      duration: 0.5
    }
  }
}

export const experienceIconAnimation = {
  hidden: { x: 50, scale: 1.2, opacity: 0 },
  visible: { x: 0, scale: 1, opacity: 1 }
}

export const experienceDateAnimation = {
  hidden: { x: 50, scale: 1.2, opacity: 0 },
  visible: { x: 0, scale: 1, opacity: 1 }
}

export const experienceContentAnimation = {
  hidden: { x: 50, scale: 1.2, opacity: 0 },
  visible: { x: 0, scale: 1, opacity: 1 }
}
