import { useState, useEffect } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="theme-toggle-btn"
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle theme"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
