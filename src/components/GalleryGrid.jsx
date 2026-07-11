import Masonry from "react-masonry-css";
import { AnimatePresence, motion } from "framer-motion";
import GalleryCard from "./GalleryCard";

const breakpointColumns = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

function GalleryGrid({ items, favorites, onToggleFavorite, onOpenItem }) {
  return (
    <div id="gallery">
      <AnimatePresence mode="wait">
        {items.length ? (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {items.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={index}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={onToggleFavorite}
                  onOpenItem={onOpenItem}
                />
              ))}
            </Masonry>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="soft-card rounded-[28px] p-10 text-center"
          >
            <h3 className="font-display text-3xl">No matches yet.</h3>
            <p className="mt-3 text-muted">
              Try another board or clear the search to uncover more fragments.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryGrid;
