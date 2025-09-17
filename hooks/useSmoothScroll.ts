"use client";

import { animate, motionValue } from "motion";


export function useSmoothScroll() {
  const scrollTo = (targetId: string, duration = 1) => {
    const element = document.querySelector(targetId);
    if (!element) return;

    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const scrollY = motionValue(window.scrollY);

    animate(scrollY, targetPosition, {
      duration: duration,
      onUpdate: (value) => window.scrollTo(0, value),
      ease: [0.25, 0.1, 0.25, 1],
    });
  };

  return { scrollTo };
}
