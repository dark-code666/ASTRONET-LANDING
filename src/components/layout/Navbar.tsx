import { Link } from 'react-router-dom';
import Button from '../ui/Button'
import { Import, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Menu from './Menu/Menu';
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
      setIsOpen(true);
      setTimeout(() => setShowSegment(true), 600);
    } else {
      setShowSegment(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  }

const closeMenuOnNavigate = () => {
    if (isOpen) {
      setShowSegment(false); 
      setTimeout(() => {
        setIsOpen(false); 
      }, 400); 
    }
  };


  return (
    <>
    <header className="fixed top-6 left-0 w-full z-50 px-4">
      <div className="mx-auto max-w-6xl" >
        <nav 
        onClick={(e) => {
              if ((e.target as HTMLElement).closest('a')) {
                closeMenuOnNavigate();
              } }} 
        className="flex items-center justify-between bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-zinc-200/50 dark:border-white/10" >
          
          {/* Logo a la izquierda */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-zinc-950 dark:text-white uppercase leading-none">
              AN<span className="text-zinc-400 font-light">′</span>
            </span>
            
            <div className="leading-tight ml-3 border-l border-zinc-300 dark:border-zinc-700 pl-3">
              <div className="text-base font-bold text-zinc-950 dark:text-white tracking-tight">ASTRONET</div>
            </div>
          </Link>

          

          {/* Central*/}
          <div className="hidden md:flex flex-1 items-center  gap-10 ml-12 ">
            <Link to="/whatwedo" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
              What we do
            </Link>
            <a href="#services" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
              Services
            </a>
            {/* <a href="#outsourcing-vas" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
              Outsourcing
            </a>
            <a href="#work" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
              Case Studies
            </a>
            <a href="#contact" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
              Contact
            </a> */}
          </div>

          {/* Aqui falta la etiqueta de Location */}

          {/* Menú y Botón - Derecha */}
          <div className="flex items-center gap-8">
            <button 
                onClick={handleMenuToggle}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">
                  {isOpen ? "Menu" : "Menu"}
                </span>
                
                <div className="relative w-6 h-4 flex items-center justify-center">
                  <span className={`absolute h-[2px] w-full bg-zinc-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1"}`}></span>
                  <span className={`absolute h-[2px] w-full bg-zinc-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1"}`}></span>
                </div>
              </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="grid size-11 place-items-center rounded-xl border border-zinc-200/70 bg-white/70 text-zinc-900 hover:bg-white active:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            
           <Link to="/Contact"> 
            <Button 
              //href="#contact"  
              variant="primary" 
              className="rounded-xl bg-[#A3FF00] text-zinc-950 font-black uppercase tracking-tight text-xs px-8 h-12 hover:brightness-105 shadow-[0_4px_14px_0_rgba(163,255,0,0.3)] transition-all"
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
             <Menu />
            </motion.div>
            )}

        </AnimatePresence>
    </>

  )
}