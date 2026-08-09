import { useEffect, useState } from "react";
import "./ScrollTop.css";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button className="scroll-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
      </svg>
      <span>Top</span>
    </button>
  );
}

export default ScrollTop;
