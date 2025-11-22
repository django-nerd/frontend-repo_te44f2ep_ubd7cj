import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-amber-500 to-fuchsia-500 blur opacity-40 group-hover:opacity-70 transition" />
                <div className="relative h-9 w-9 rounded-lg bg-slate-900 grid place-items-center border border-white/10">
                  <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-amber-400 to-fuchsia-400">R</span>
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">Resplend</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow-sm hover:shadow-md transition">
                Let’s Talk
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow-sm">
                Let’s Talk
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
