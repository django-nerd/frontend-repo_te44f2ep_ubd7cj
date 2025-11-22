import { ScreenShare, MapPin, BarChart3, Rocket, Sparkles, Building2 } from 'lucide-react'

function Card({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-white mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Full-funnel OOH solutions</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">From planning to post-campaign analytics, we handle the messy middle and deliver measurable outcomes.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={ScreenShare} title="Digital & Static OOH">
            Billboards, transit, place-based and spectaculars. National reach with local relevance.
          </Card>
          <Card icon={MapPin} title="Precision Planning">
            Audience-first planning using movement data, POIs and competitor mapping.
          </Card>
          <Card icon={BarChart3} title="Attribution & Lift">
            Footfall, brand search and app installs tied to OOH exposure using privacy-safe methods.
          </Card>
          <Card icon={Rocket} title="Creative Ops">
            High-velocity creative production, dynamic DOOH and contextual triggers.
          </Card>
          <Card icon={Sparkles} title="Production & Install">
            Print, shipping and on-site install management with quality assurance.
          </Card>
          <Card icon={Building2} title="Permits & Compliance">
            We handle landlord approvals, permits and everything legal in between.
          </Card>
        </div>
      </div>
    </section>
  )
}
