const testimonials = [
  {
    text: "He knows what he is doing, spends good time thoroughly cleaning everything. Flexible scheduling and clearly cares about his customers.",
    author: "Rohan Johal",
    detail: "Fresno homeowner · Google Review",
    stars: 5,
  },
  {
    text: "Awesome gardener, very friendly, excellent job. Julian is someone you can count on to keep your yard looking great.",
    author: "Erlinda Nadora",
    detail: "Local Guide · 144 reviews · Google",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[oklch(0.66_0.12_72)] text-sm font-semibold uppercase tracking-widest mb-3">
            Reviews
          </p>
          <h2 className="font-display font-bold text-[oklch(0.20_0.022_82)] text-4xl lg:text-5xl">
            What Fresno homeowners say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[oklch(0.975_0.010_82)] rounded-2xl p-7 border border-[oklch(0.86_0.022_82)]"
            >
              <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="oklch(0.66 0.12 72)" aria-hidden="true">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-[oklch(0.30_0.04_82)] text-base leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <span className="font-semibold text-[oklch(0.20_0.022_82)] block text-sm">{t.author}</span>
                  <span className="text-[oklch(0.46_0.038_82)] text-xs">{t.detail}</span>
                </cite>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
