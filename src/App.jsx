import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Solutions />
        <Work />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Resplend — Out-of-home advertising.</p>
          <div className="text-slate-400 text-sm">Built with care.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
