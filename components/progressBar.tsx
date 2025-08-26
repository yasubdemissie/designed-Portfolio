"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollToTop from "./scroll-to-top";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopFunc = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50 dark:from-blue-400 dark:to-purple-500"
        style={{ scaleX }}
      />
      <ScrollToTop scrollToTop={scrollToTopFunc} showScrollTop={showScrollTop} />
    </>
  );
}
