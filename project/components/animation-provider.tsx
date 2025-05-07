'use client';

import { useEffect } from 'react';

/**
 * Animation Provider Component
 * Handles initialization of animations on the client side
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll animations
    const initScrollAnimations = () => {
      // Create observer with options
      const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // trigger when 10% of the element is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get any animation delay from the element
            const element = entry.target as HTMLElement;
            
            // Start the animation
            element.style.animationPlayState = 'running';
            
            // Unobserve after animation starts
            observer.unobserve(element);
          }
        });
      }, options);

      // Observe all elements with the animate-on-scroll class
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Wait for DOM to be fully loaded
    if (document.readyState === 'complete') {
      initScrollAnimations();
    } else {
      window.addEventListener('load', initScrollAnimations);
      
      // Cleanup
      return () => {
        window.removeEventListener('load', initScrollAnimations);
      };
    }
  }, []);

  return <>{children}</>;
}
