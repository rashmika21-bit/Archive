import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

const heightClasses = [
  "h-[360px]",
  "h-[280px]",
  "h-[420px]",
  "h-[330px]",
  "h-[390px]",
];

function GalleryCard({
  item,
  index,
  isFavorite,
  onToggleFavorite,
  onOpenItem,
}) {
  const [loaded, setLoaded] = useState(false);
  const heightClass = heightClasses[index % heightClasses.length];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group overflow-hidden rounded-[24px] bg-[var(--surface-strong)] shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative">
        <button
          type="button"
          className="block w-full text-left"
          onClick={() => onOpenItem(item)}
        >
          <div
            className={`relative overflow-hidden ${heightClass} bg-[var(--accent-soft)]`}
          >
            {!loaded ? (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#f2ece4] to-[#dfcfbf] dark:from-[#2c241e] dark:to-[#352b23]" />
            ) : null}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
            />

            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />

            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-[#3f362f] backdrop-blur">
                {item.category}
              </span>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onToggleFavorite(item.id)}
          className={`absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/80 text-[#3f362f] backdrop-blur transition hover:scale-105 ${
            isFavorite ? "bg-[var(--accent)] text-white" : ""
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FiHeart className={isFavorite ? "fill-current" : ""} />
        </button>
      </div>

      <button
        type="button"
        className="block w-full text-left p-5"
        onClick={() => onOpenItem(item)}
      >
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-muted">
          <span>{item.date}</span>
          <span>{item.tags[0]}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-[var(--text)]">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
          {item.description}
        </p>
      </button>
    </motion.article>
  );
}

export default GalleryCard;
