export default function Logos() {
  const logos = [
    'https://cdn.simpleicons.org/netflix/ffffff',
    'https://cdn.simpleicons.org/shopify/ffffff',
    'https://cdn.simpleicons.org/spotify/ffffff',
    'https://cdn.simpleicons.org/airbnb/ffffff',
    'https://cdn.simpleicons.org/uber/ffffff',
    'https://cdn.simpleicons.org/coinbase/ffffff',
  ]
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm uppercase tracking-wider text-slate-400 mb-8">Trusted by ambitious brands</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="brand" className="h-8 mx-auto" />)
          )}
        </div>
      </div>
    </section>
  )
}
