import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="tel:+31634508004"
      className={`fixed bottom-6 right-6 z-50 md:hidden bg-orange-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-orange-700 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      aria-label="Bel ons direct"
    >
      <Phone className="w-7 h-7" />
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-75"></span>
    </a>
  );
}
