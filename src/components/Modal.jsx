import { motion } from "framer-motion";
import { FiCalendar, FiHeart, FiX } from "react-icons/fi";

function Modal({ item, isFavorited, onToggleFavorite, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/35 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-5xl overflow-hidden rounded-[32px] bg-[var(--surface-strong)] shadow-lift max-h-[94vh] overflow-y-auto sm:max-h-[90vh]"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative flex min-h-[280px] items-center justify-center bg-[var(--accent-soft)] sm:min-h-[340px] lg:min-h-[720px]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full max-h-[42vh] w-full object-contain sm:max-h-[50vh] lg:max-h-none lg:object-cover"
            />
          </div>

          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em]">
                  {item.category}
                </span>
                <h2 className="mt-5 font-display text-4xl text-[var(--text)]">
                  {item.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:scale-105"
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>

            <p className="mt-6 text-base leading-8 text-muted">
              {item.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2">
                <FiCalendar /> {item.date}
              </span>
              <button
                type="button"
                onClick={() => onToggleFavorite(item.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition ${
                  isFavorited
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--accent-soft)]"
                }`}
              >
                <FiHeart className={isFavorited ? "fill-current" : ""} />
                {isFavorited ? "Saved" : "Save"}
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                Tags
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
