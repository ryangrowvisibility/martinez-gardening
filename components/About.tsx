export default function About() {
  return (
    <section id="about" className="py-24 bg-[oklch(0.975_0.010_82)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div>
            <p className="text-[oklch(0.66_0.12_72)] text-sm font-semibold uppercase tracking-widest mb-3">
              About Julian
            </p>
            <h2 className="font-display font-bold text-[oklch(0.20_0.022_82)] text-4xl lg:text-5xl mb-6">
              One gardener. 18 years. Your yard.
            </h2>
            <div className="space-y-4 text-[oklch(0.46_0.038_82)] text-base leading-relaxed max-w-lg">
              <p>
                Julian Martinez started Martinez Gardening in Fresno in 2008 with a straightforward
                approach: do thorough work, be flexible with clients, and genuinely care about the
                results.
              </p>
              <p>
                As a one-person operation, Julian handles every job himself. That means when you
                call, you speak to Julian. When he shows up, it&apos;s Julian. And when the work is
                done, Julian takes personal responsibility for how it looks.
              </p>
              <p>
                After 18 years in Fresno, that consistency has built a base of loyal residential
                clients who trust him with their homes.
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            {[
              {
                title: "Knows His Craft",
                body: "Customers specifically mention that Julian spends the right amount of time on each job — thorough, not rushed.",
              },
              {
                title: "Flexible Scheduling",
                body: "Weekly or biweekly service available. Julian works with your schedule to find what fits.",
              },
              {
                title: "Personal Accountability",
                body: "As a sole operator, Julian personally handles every job. Your yard gets his full attention, every visit.",
              },
              {
                title: "In Business Since 2008",
                body: "17 continuous years in Fresno. BBB file opened January 2008. This isn&apos;t a side hustle — it&apos;s his business.",
              },
              {
                title: "Mon–Sat 9am–5pm",
                body: "Consistent hours across Fresno, CA. Call to check availability and schedule a visit.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white rounded-2xl p-5 border border-[oklch(0.86_0.022_82)]">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[oklch(0.93_0.022_148)] text-[oklch(0.28_0.09_148)] flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-[oklch(0.20_0.022_82)] text-base mb-0.5">{item.title}</div>
                  <div className="text-[oklch(0.46_0.038_82)] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
