import { CheckCircle2 } from 'lucide-react'

export default function Process() {
  const steps = [
    ['Discover', 'We clarify objectives, audiences and timelines.'],
    ['Design', 'We shape the plan, formats and creative toolkit.'],
    ['Deploy', 'We manage production, installs and go-live.'],
    ['Diagnose', 'We measure, learn and optimize for lift.'],
  ]
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="text-white" />
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">How we work</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="text-sm text-white/60">Step</div>
                <div className="mt-1 text-lg font-semibold text-white">{title}</div>
                <p className="mt-2 text-sm text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
