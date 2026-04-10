export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-16 bg-[oklch(0.975_0.010_82)]">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            {/* Since badge */}
            <div className="animate-fade-up stagger-1 inline-flex items-center gap-2 bg-[oklch(0.93_0.022_148)] text-[oklch(0.28_0.09_148)] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Fresno Gardener Since 2008
            </div>

            <h1 className="animate-fade-up stagger-2 font-display font-bold text-[oklch(0.20_0.022_82)] leading-[1.1] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>
              Lawn &amp; Garden Care<br />
              That Actually<br />
              <em className="not-italic text-[oklch(0.28_0.09_148)]">Gets Done Right</em>
            </h1>

            <p className="animate-fade-up stagger-3 text-lg text-[oklch(0.46_0.038_82)] leading-relaxed mb-8 max-w-lg">
              Julian Martinez has been caring for Fresno lawns and gardens since 2008. Thorough,
              flexible, and genuinely invested in every yard he works on.
            </p>

            {/* Tags */}
            <div className="animate-fade-up stagger-3 flex flex-wrap gap-2 mb-10">
              {["18 Years in Fresno", "Flexible Scheduling", "Biweekly & Weekly", "Mon–Sat 9am–5pm"].map((tag) => (
                <span key={tag} className="bg-white text-[oklch(0.42_0.08_148)] text-sm font-medium px-3 py-1.5 rounded-lg border border-[oklch(0.86_0.022_82)]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:5599782067"
                className="bg-[oklch(0.28_0.09_148)] text-white font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[oklch(0.36_0.09_148)] transition-all duration-200 active:scale-[0.97] text-center cursor-pointer"
              >
                Call (559) 978-2067
              </a>
              <a
                href="#services"
                className="bg-[oklch(0.93_0.022_148)] text-[oklch(0.28_0.09_148)] font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[oklch(0.88_0.024_148)] transition-all duration-200 active:scale-[0.97] text-center cursor-pointer"
              >
                See Services
              </a>
            </div>
          </div>

          {/* Right: story card */}
          <div className="animate-fade-up stagger-3">
            <div className="bg-white rounded-2xl border border-[oklch(0.86_0.022_82)] p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[oklch(0.94_0.016_82)] rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-[oklch(0.28_0.09_148)] text-3xl">18</div>
                  <div className="text-xs text-[oklch(0.46_0.038_82)] mt-0.5">Years in Fresno</div>
                </div>
                <div className="bg-[oklch(0.94_0.016_82)] rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-[oklch(0.28_0.09_148)] text-3xl">2008</div>
                  <div className="text-xs text-[oklch(0.46_0.038_82)] mt-0.5">Year Founded</div>
                </div>
                <div className="bg-[oklch(0.94_0.016_82)] rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-[oklch(0.28_0.09_148)] text-2xl">5★</div>
                  <div className="text-xs text-[oklch(0.46_0.038_82)] mt-0.5">Top Reviews</div>
                </div>
                <div className="bg-[oklch(0.94_0.016_82)] rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-[oklch(0.28_0.09_148)] text-2xl">5</div>
                  <div className="text-xs text-[oklch(0.46_0.038_82)] mt-0.5">Services</div>
                </div>
              </div>

              <blockquote className="bg-[oklch(0.93_0.022_148)] rounded-xl p-4 mb-5">
                <p className="text-sm text-[oklch(0.36_0.06_82)] italic leading-relaxed">
                  &ldquo;He knows what he is doing, spends good time thoroughly cleaning everything.
                  Flexible scheduling and clearly cares about his customers.&rdquo;
                </p>
                <cite className="not-italic text-xs font-semibold text-[oklch(0.28_0.09_148)] block mt-2">
                  — Rohan Johal, Google Review
                </cite>
              </blockquote>

              <a
                href="tel:5599782067"
                className="block w-full bg-[oklch(0.66_0.12_72)] text-white font-semibold text-sm py-3 rounded-xl text-center hover:bg-[oklch(0.60_0.12_70)] transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
