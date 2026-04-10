export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.20_0.022_82)] text-[oklch(0.65_0.03_82)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <span className="font-display font-semibold text-white">Martinez Gardening</span>
          <span className="mx-2 opacity-40">·</span>
          Julian Martinez
          <span className="mx-2 opacity-40">·</span>
          Fresno, CA
          <span className="mx-2 opacity-40">·</span>
          Since 2008
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Martinez+Gardening&query_place_id=ChIJ_fLVFuNllIAR08z5HFud7XI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Martinez Gardening on Google Maps"
          >
            Google Maps
          </a>
          <span className="opacity-40">&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}
