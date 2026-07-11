import { motion } from "framer-motion";

function BoardFilter({ boards, activeBoard, onChange }) {
  return (
    <section id="boards" className="soft-card rounded-[28px] p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Boards
          </p>
          <h3 className="mt-1 font-display text-2xl text-[var(--text)]">
            Sort by mood
          </h3>
        </div>
        <span className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-medium text-[var(--text)]">
          {activeBoard}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {boards.map((board) => {
          const active = activeBoard === board;
          return (
            <motion.button
              key={board}
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(board)}
              className={`pill border border-transparent ${active ? "pill-active shadow-lg" : ""}`}
            >
              {board}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

export default BoardFilter;
