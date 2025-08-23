"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

// Extend the Window interface globally for scrollAnimation
declare global {
  interface Window {
    scrollAnimation: number | null;
  }
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-4 sm:top-6 lg:top-10 left-0 right-0 w-full mx-4 sm:w-5/6 md:w-4/5 lg:w-2/3 rounded-2xl sm:rounded-3xl lg:rounded-4xl sm:mx-auto bg-brand-second z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <h1 className="text-lg sm:text-xl font-medium text-brand-text">Nahom Dibaba</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 lg:gap-8">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-brand-text/70 hover:text-brand-text transition-colors text-base"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("works")}
            className="text-brand-text/70 hover:text-brand-text transition-colors text-base"
          >
            Works
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-brand-text/70 hover:text-brand-text transition-colors text-base"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("services")}
            className="text-brand-text/70 hover:text-brand-text transition-colors text-base"
          >
            Services
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-brand-text p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden border-t border-brand-text/10 px-4 py-4 bg-brand-second rounded-b-2xl">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="text-brand-text/70 hover:text-brand-text transition-colors text-sm text-center py-2"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("works")}
              className="text-brand-text/70 hover:text-brand-text transition-colors text-sm text-center py-2"
            >
              Works
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("about")}
              className="text-brand-text/70 hover:text-brand-text transition-colors text-sm text-center py-2"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("services")}
              className="text-brand-text/70 hover:text-brand-text transition-colors text-sm text-center py-2"
            >
              Services
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;