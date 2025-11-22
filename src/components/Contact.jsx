import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch(`${baseUrl}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks — we’ll be in touch shortly!')
      else setStatus(data.detail || 'Something went wrong')
    } catch (err) {
      setStatus('Network error — try again later')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Let’s make something unmissable</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Tell us about your objectives and timing. We’ll come back with routes, pricing and a timeline.</p>
            <ul className="mt-6 space-y-2 text-slate-200 text-sm">
              <li>• Average response time: under 24 hours</li>
              <li>• Optional NDA available</li>
              <li>• We work globally</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Company</label>
              <input name="company" className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" rows="4" required className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white" />
            </div>
            <button className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold">Send inquiry</button>
            {status && <p className="text-sm text-slate-200">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
