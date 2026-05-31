import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Menu from './Menu/Menu'
import LineTransition from './Menu/LineTransition'

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showSegment, setShowSegment] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)

    if (nextIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleMenuToggle = () => {
    if (!isOpen) {
      setIsOpen(true)
      setTimeout(() => setShowSegment(true), 600)
    } else {
      setShowSegment(false)
      setTimeout(() => setIsOpen(false), 300)
    }
  }

  const closeMenuOnNavigate = () => {
    if (isOpen) {
      setShowSegment(false)
      setTimeout(() => setIsOpen(false), 400)
    }
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-3 z-50 w-full px-3 sm:top-4 sm:px-4">
        <div className="mx-auto max-w-6xl">
          <nav
            onClick={(e) => {
              if ((e.target as HTMLElement).closest('a')) {
                closeMenuOnNavigate()
              }
            }}
            className="flex items-center justify-between rounded-2xl border border-zinc-200/50 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80 sm:px-5 sm:py-3"
          >
            <Link to="/" className="flex min-w-0 items-center">
              <span className="text-xl font-black uppercase leading-none tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
                AN<span className="font-light text-zinc-400">'</span>
              </span>

              <div className="ml-2 border-l border-zinc-300 pl-2 leading-tight dark:border-zinc-700 sm:ml-3 sm:pl-3">
                <div className="text-sm font-bold tracking-tight text-zinc-950 dark:text-white sm:text-base">ASTRONET</div>
              </div>
            </Link>

            <div className="ml-10 hidden flex-1 items-center gap-8 md:flex lg:gap-10">
              <Link to="/whatwedo" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 transition-opacity hover:opacity-70 dark:text-white">
                How we do
              </Link>
              <Link to="/#outsourcing-vas" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 transition-opacity hover:opacity-70 dark:text-white">
                Outsourcing And VAs
              </Link>
              <Link to="/pricing" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 transition-opacity hover:opacity-70 dark:text-white">
                Pricing
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              <button
                type="button"
                onClick={handleMenuToggle}
                className="group flex cursor-pointer items-center gap-2 text-xs sm:text-sm"
                aria-expanded={isOpen}
                aria-label="Open menu"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">
                  Menu
                </span>

                <div className="relative flex h-4 w-6 items-center justify-center">
                  <span className={`absolute h-[2px] w-full rounded-full bg-zinc-900 transition-all duration-300 dark:bg-white ${isOpen ? 'rotate-45' : '-translate-y-1'}`} />
                  <span className={`absolute h-[2px] w-full rounded-full bg-zinc-900 transition-all duration-300 dark:bg-white ${isOpen ? '-rotate-45' : 'translate-y-1'}`} />
                </div>
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="grid size-10 place-items-center rounded-xl border border-zinc-200/70 bg-white/70 text-zinc-900 hover:bg-white active:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:size-11"
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link to="/contact" className="hidden sm:block">
                <Button
                  variant="primary"
                  className="h-10 rounded-xl bg-[#A3FF00] px-4 text-xs font-black uppercase tracking-tight text-zinc-950 shadow-[0_4px_14px_0_rgba(163,255,0,0.3)] transition-all hover:brightness-105 md:h-11 md:px-6 md:text-sm"
                >
                  Start a project
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <LineTransition isVisible={isOpen} />

      <AnimatePresence>
        {showSegment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[45] bg-zinc-950"
          >
            <Menu onNavigate={closeMenuOnNavigate} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
