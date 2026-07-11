import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange, className = "" }) {
  return (
    <label
      className={`flex h-12 w-full items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-sm text-muted shadow-sm ${className}`}
    >
      <FiSearch className="shrink-0" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search coffee, cats, books..."
        aria-label="Search the archive"
        className="search-input w-full bg-transparent text-[var(--text)] outline-none placeholder:text-muted"
      />
    </label>
  );
}

export default SearchBar;
