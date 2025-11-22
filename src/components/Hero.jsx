import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 opacity-20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-fuchsia-500 opacity-10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white"
            >
              Out-of-home done brilliantly
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-lg text-slate-200 max-w-xl"
            >
              Resplend plans, books, and measures high-impact OOH campaigns. From landmark billboards to dynamic DOOH, we put your brand in the right place at the right moment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-sm hover:shadow-md transition">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-transparent text-white ring-1 ring-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition">
                See our work
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                ['+1,200', 'sites mapped'],
                ['98%', 'on-time installs'],
                ['32%', 'avg. uplift'],
              ].map(([stat, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">{stat}</div>
                  <div className="text-xs text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-amber-500 to-fuchsia-600 opacity-30 blur-2xl" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1516771317026-14d76f5396e1?q=80&w=1600&auto=format&fit=crop"
                alt="City billboards at night"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/30" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-sm">Times Sq. Takeover</span>
                <span className="text-xs text-white/70">DOOH + Static • 2 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
