import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
      aria-label="Back to top"
    >
      <FiArrowUp />
    </a>
  );
}

export default BackToTopButton;
