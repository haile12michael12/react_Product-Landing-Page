import { useEffect, useState, RefObject } from "react";

type UseInViewOptions = {
  once?: boolean;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const useInView = (
  elementRef: RefObject<Element>,
  {
    once = false,
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
  }: UseInViewOptions = {}
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        setIsInView(isElementInView);

        if (isElementInView && once) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, root, rootMargin, threshold, once]);

  return isInView;
};
