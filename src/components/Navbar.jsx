import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Navbar({ search, onSearchChange, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5"
    >
      <div
        className={`glass-panel mx-auto flex max-w-[1680px] flex-col gap-4 rounded-[28px] px-4 py-4 transition-all duration-300 md:flex-row md:items-center md:justify-between ${
          scrolled ? "shadow-lift" : ""
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-3 text-[1.05rem] font-semibold tracking-[0.24em] text-[var(--text)]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[var(--accent-soft)] text-[var(--text)] shadow-sm">
            A
          </span>
          <span className="font-display text-2xl tracking-tight">Archive.</span>
        </a>

        <div className="flex flex-1 flex-col gap-3 md:mx-10 md:flex-row md:items-center">
          <SearchBar value={search} onChange={onSearchChange} />

          <nav className="flex items-center gap-2 text-sm font-medium text-muted">
            <a
              href="#boards"
              className="rounded-full px-4 py-2 transition hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
            >
              Boards
            </a>
            <a
              href="#about"
              className="rounded-full px-4 py-2 transition hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
            >
              About
            </a>
          </nav>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;
