"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

export default function ScrollToTop({
  showScrollTop,
  scrollToTop,
}: ScrollToTopProps) {
  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 z-40"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: showScrollTop ? 1 : 0,
        scale: showScrollTop ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}
