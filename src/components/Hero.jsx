import { motion } from "framer-motion";

function Hero({ heroStats }) {
  return (
    <section
      id="about"
      className="soft-card overflow-hidden rounded-[32px] p-6 sm:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-muted">
            Personal gallery
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            Hiii,
            <br />
            Welcome to my little corner of the internet.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            A collection of memories, coffee, cats, music, photography, books,
            places,random moments and my friends. 
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#boards"
              className="pill hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore boards
            </a>
            <a
              href="#gallery"
              className="pill bg-[var(--surface)] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Browse gallery
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-[28px] bg-[var(--bg)] p-5 shadow-soft"
        >
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-5"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-muted">
                  {stat.label}
                </p>
                <p className="mt-3 font-display text-4xl text-[var(--text)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
