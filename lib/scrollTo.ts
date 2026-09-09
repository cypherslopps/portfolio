import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type ScrollToOptions = {
  offset?: number;
  duration?: number;
  ease?: string;
  onComplete?: () => void;
};

/**
 * Smoothly scrolls to any element using GSAP ScrollToPlugin
 * @param target - CSS selector, element ID, class, or HTMLElement
 */
export function scrollToSection(
  target: string | HTMLElement,
  options: ScrollToOptions = {},
) {
  const {
    offset = 0,
    duration = 0,
    ease = "power2.inOut",
    onComplete,
  } = options;

  gsap.to(window, {
    duration,
    ease,
    scrollTo: {
      y: target,
      offsetY: offset,
    },
    onComplete,
  });
}
