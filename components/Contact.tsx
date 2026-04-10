export default function Contact() {
  const mapsEmbedUrl =
    "https://maps.google.com/maps?q=4202+N+Constance+Ave,+Fresno,+CA+93722&output=embed";

  return (
    <section id="contact" className="py-24 bg-[oklch(0.975_0.010_82)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-[oklch(0.66_0.12_72)] text-sm font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-[oklch(0.20_0.022_82)] text-4xl lg:text-5xl mb-6">
              Let&apos;s talk about your yard
            </h2>
            <p className="text-[oklch(0.46_0.038_82)] text-lg leading-relaxed mb-10 max-w-md">
              Give Julian a call to discuss your lawn and garden needs. He&apos;ll work with your
              schedule and let you know what&apos;s possible.
            </p>

            <div className="space-y-5">
              <a
                href="tel:5599782067"
                className="flex items-center gap-4 group cursor-pointer"
                aria-label="Call Julian Martinez"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.93_0.022_148)] text-[oklch(0.28_0.09_148)] flex items-center justify-center group-hover:bg-[oklch(0.28_0.09_148)] group-hover:text-white transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.82-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[oklch(0.46_0.038_82)]">Phone — Julian Martinez</div>
                  <div className="font-semibold text-[oklch(0.20_0.022_82)] text-lg">(559) 978-2067</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.93_0.022_148)] text-[oklch(0.28_0.09_148)] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[oklch(0.46_0.038_82)]">Hours</div>
                  <div className="font-semibold text-[oklch(0.20_0.022_82)]">Monday–Saturday 9:00 AM – 5:00 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.93_0.022_148)] text-[oklch(0.28_0.09_148)] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[oklch(0.46_0.038_82)]">Service Area</div>
                  <div className="font-semibold text-[oklch(0.20_0.022_82)]">Fresno, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="tel:5599782067"
                className="inline-block bg-[oklch(0.28_0.09_148)] text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-[oklch(0.36_0.09_148)] transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                Call Julian Today
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[oklch(0.86_0.022_82)] h-80 lg:h-auto min-h-[320px]">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Martinez Gardening service area map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
