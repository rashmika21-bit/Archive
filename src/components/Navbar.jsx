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
        className={`glass-panel mx-auto flex max-w-[1680px] flex-col gap-3 rounded-[24px] px-3 py-3 transition-all duration-300 sm:rounded-[28px] sm:px-4 sm:py-4 ${
          scrolled ? "shadow-lift" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="flex items-center gap-3 text-[1.05rem] font-semibold tracking-[0.18em] text-[var(--text)] sm:tracking-[0.24em]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[16px] bg-[var(--accent-soft)] text-[var(--text)] shadow-sm sm:h-11 sm:w-11 sm:rounded-[18px]">
              A
            </span>
            <span className="font-display text-xl tracking-tight sm:text-2xl">
              Archive.
            </span>
          </a>

          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:h-12 sm:w-12"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-3 sm:mx-10 sm:flex-row sm:items-center">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            className="h-11 sm:h-12"
          />

          <nav className="hidden items-center gap-2 text-sm font-medium text-muted sm:flex">
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
      </div>
    </motion.header>
  );
}

export default Navbar;
