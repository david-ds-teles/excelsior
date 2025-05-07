/**
 * Animation utilities for Excelsior landing page
 * Handles scroll-based animations and other interactive elements
 */

/**
 * Initializes scroll animations for elements with the animate-on-scroll class
 * Uses Intersection Observer API for performance
 */
export function initScrollAnimations(): void {
  if (typeof window === 'undefined') return;

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
        const delay = element.dataset.delay || '0';
        
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
}

/**
 * Initializes all animations on the page
 * Call this function from a useEffect hook in your layout or page component
 */
export function initAnimations(): void {
  if (typeof window === 'undefined') return;
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'complete') {
    initScrollAnimations();
  } else {
    window.addEventListener('load', initScrollAnimations);
    
    // Cleanup - we don't return anything here since the return type is void
    window.addEventListener('beforeunload', () => {
      window.removeEventListener('load', initScrollAnimations);
    });
  }
}
