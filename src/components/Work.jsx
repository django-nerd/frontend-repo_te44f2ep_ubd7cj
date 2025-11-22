export default function Work() {
  const projects = [
    {
      title: 'Global Streaming Launch',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
      meta: 'Billboards + Transit • 6 weeks',
    },
    {
      title: 'Fintech Awareness Surge',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
      meta: 'DOOH Programmatic • 4 weeks',
    },
    {
      title: 'Citywide Brand Refresh',
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1600&auto=format&fit=crop',
      meta: 'Spectacular • 10 days',
    },
  ]

  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Selected work</h2>
          <a href="#contact" className="text-white/80 hover:text-white">Request case study →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.title} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900">
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="text-sm text-white/70">{p.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
