"use client";

// Extend the Window interface globally for scrollAnimation
declare global {
  interface Window {
    scrollAnimation: number | null;
  }
}

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Cancel any ongoing scroll animation
    if (window.scrollAnimation) {
      cancelAnimationFrame(window.scrollAnimation);
    }

    const headerHeight = 80;
    const targetPosition = element.offsetTop - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1800;

    // Early return if already at target
    if (Math.abs(distance) < 1) return;

    let startTime: number | null = null;

    const easeOutElastic = (t: number): number => {
      if (t === 0) return 0;
      if (t === 1) return 1;
      const c4 = (2 * Math.PI) / 8; // Reduced frequency for less bounce
      return Math.pow(2, -15 * t) * Math.sin((t * 5 - 0.5) * c4) + 1; // Reduced amplitude and frequency
    };

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutElastic(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        window.scrollAnimation = requestAnimationFrame(animateScroll);
      } else {
        window.scrollAnimation = null;
      }
    };

    // Start the animation
    window.scrollAnimation = requestAnimationFrame(animateScroll);
  };

  return (
    <header className="fixed top-10 left-0 right-0 w-2/3 rounded-4xl mx-auto bg-brand-second z-50 flex justify-between items-center px-8 py-6">
      <h1 className="text-xl font-medium text-brand-text">Nahom Dibaba</h1>
      <nav className="flex gap-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("works")}
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          Works
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("services")}
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          Services
        </button>
      </nav>
    </header>
  );
}

export default Header;
