import { FiArrowUpRight } from "react-icons/fi";

function Footer({ quote }) {
  return (
    <footer
      id="footer"
      className="mx-auto max-w-[1680px] px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div className="soft-card rounded-[32px] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Archive.
            </p>
            <p className="mt-4 max-w-2xl font-display text-3xl leading-tight text-[var(--text)] sm:text-4xl">
              Built with curiosity, coffee, and a camera.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              {quote}
            </p>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 justify-self-start rounded-full bg-[var(--accent-soft)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Back to top <FiArrowUpRight />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
