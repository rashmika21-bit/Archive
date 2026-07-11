import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import galleryItems from "./data/galleryItems";
import { readStorage, toggleInArray, writeStorage } from "./utils/storage";
import { useScrollProgress } from "./hooks/useScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BoardFilter from "./components/BoardFilter";
import GalleryGrid from "./components/GalleryGrid";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

const boardGroups = [
  "All",
  "Coffee",
  "Food",
  "Travel",
  "Books",
  "Portraits",
  "Nature",
  "Random",
];

function App() {
  const [search, setSearch] = useState("");
  const [activeBoard, setActiveBoard] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState(() =>
    readStorage("archive-favorites", []),
  );
  const [theme, setTheme] = useState(() =>
    readStorage("archive-theme", "light"),
  );
  const progress = useScrollProgress();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    writeStorage("archive-theme", theme);
  }, [theme]);

  useEffect(() => {
    writeStorage("archive-favorites", favorites);
  }, [favorites]);

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return galleryItems.filter((item) => {
      const matchesBoard =
        activeBoard === "All" || item.category === activeBoard;
      const searchableText = [
        item.title,
        item.description,
        item.category,
        item.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = !query || searchableText.includes(query);
      return matchesBoard && matchesSearch;
    });
  }, [activeBoard, search]);

  const heroStats = [
    { label: "Boards", value: (boardGroups.length - 1).toString() },
    { label: "Moments", value: galleryItems.length.toString() },
    { label: "Favorites", value: favorites.length.toString() },
  ];

  const quote = useMemo(
    () =>
      [
        "Collect the little things until they become a place you can return to.",
        "Every saved moment is a room with a mood.",
        "Soft details make the strongest memories.",
        "A beautiful life is often built from ordinary fragments.",
      ][new Date().getDate() % 4],
    [],
  );

  const toggleFavorite = (id) => {
    setFavorites((current) => toggleInArray(current, id));
  };

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
    >
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[var(--accent)]"
        style={{ scaleX: progress }}
      />

      <Navbar
        search={search}
        onSearchChange={setSearch}
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
      />

      <main className="mx-auto w-full max-w-[1680px] px-4 pb-20 pt-36 sm:px-6 sm:pt-32 lg:px-8 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Hero heroStats={heroStats} />
        </motion.div>

        <div className="mt-8">
          <BoardFilter
            boards={boardGroups}
            activeBoard={activeBoard}
            onChange={setActiveBoard}
          />
        </div>

        <section className="mt-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-muted">
                Curated archive
              </p>
              <h2 className="mt-2 font-display text-3xl text-[var(--text)] sm:text-4xl">
                Little moments worth keeping.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted">
              Search through coffee, cats, books, places, and the unplanned
              details that turn a gallery into a scrapbook.
            </p>
          </div>

          <GalleryGrid
            items={filteredItems}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpenItem={setSelectedItem}
          />
        </section>
      </main>

      <Footer quote={quote} />
      <BackToTopButton />

      <AnimatePresence>
        {selectedItem ? (
          <Modal
            item={selectedItem}
            isFavorited={favorites.includes(selectedItem.id)}
            onToggleFavorite={toggleFavorite}
            onClose={() => setSelectedItem(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
