const services = [
  {
    name: "Lawn Mowing",
    description: "Regular residential mowing at healthy, even heights. Julian takes the time to do it thoroughly — not just a quick pass.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22V12M12 12C12 7 7 4 3 5c0 6 4 10 9 10zM12 12C12 7 17 4 21 5c0 6-4 10-9 10z"/></svg>,
  },
  {
    name: "Edging",
    description: "Clean, defined edges along driveways, sidewalks, and planting beds. The detail that makes a lawn look truly finished.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  },
  {
    name: "Garden Maintenance",
    description: "Weeding, trimming, and tending garden beds to keep plantings healthy and your yard looking cared for.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 8C8 10 5.9 16.17 3.82 22M9.5 4.75c.94 2.88 2.5 5 5.5 6.25M21 12c-4 .5-6 2.5-7 5"/></svg>,
  },
  {
    name: "Yard Cleanup",
    description: "Leaf collection, debris removal, and seasonal cleanouts. Julian leaves your yard clean, not just mowed.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>,
  },
  {
    name: "Landscaping",
    description: "General landscaping for residential properties. Flexible for one-time projects or ongoing seasonal work.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[oklch(0.66_0.12_72)] text-sm font-semibold uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="font-display font-bold text-[oklch(0.20_0.022_82)] text-4xl lg:text-5xl mb-4 max-w-xl">
            Everything your yard deserves
          </h2>
          <p className="text-[oklch(0.46_0.038_82)] text-lg max-w-2xl">
            Weekly or biweekly — whatever fits your schedule. Julian works with you to keep your
            lawn and garden looking its best year-round.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`bg-[oklch(0.975_0.010_82)] rounded-2xl p-6 border border-[oklch(0.86_0.022_82)] hover:border-[oklch(0.28_0.09_148)/0.3] hover:shadow-sm transition-all duration-200 animate-fade-up stagger-${Math.min(i + 1, 5)}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.93_0.022_148)] text-[oklch(0.28_0.09_148)] flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-[oklch(0.20_0.022_82)] text-lg mb-2">
                {service.name}
              </h3>
              <p className="text-[oklch(0.46_0.038_82)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Scheduling note card */}
          <div className="bg-[oklch(0.28_0.09_148)] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="font-display font-bold text-white text-xl mb-2">Flexible Scheduling</div>
              <p className="text-[oklch(0.78_0.04_148)] text-sm leading-relaxed">
                Weekly or biweekly service available. Julian works around your schedule — just ask.
              </p>
            </div>
            <a
              href="tel:5599782067"
              className="mt-6 block bg-white text-[oklch(0.28_0.09_148)] font-semibold text-sm py-3 rounded-xl text-center hover:bg-[oklch(0.93_0.022_148)] transition-all duration-150 active:scale-[0.97] cursor-pointer"
            >
              Call to Schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
