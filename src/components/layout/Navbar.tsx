import Button from '../ui/Button'

type NavLink = {
  label: string
  href: string
}

export type NavbarProps = {
  links?: NavLink[]
}

export default function Navbar({
  links = [
    { label: 'What we do', href: '#services' },
    { label: 'Case studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-zinc-950 text-white">
            <span className="text-sm font-black tracking-tight">AN</span>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-zinc-950">Astronet</div>
            <div className="text-xs text-zinc-500">Software Development Studio</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#location"
            className="hidden text-xs font-semibold tracking-wide text-zinc-500 hover:text-zinc-900 lg:block"
          >
            OUR LOCATION: <span className="text-zinc-900">Remote / LATAM</span>
          </a>

          <div className="md:hidden">
            <button
              className="grid size-11 place-items-center rounded-xl border border-zinc-900/10 bg-white text-zinc-900"
              type="button"
              aria-label="Open menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <Button href="#contact" className="hidden sm:inline-flex">
            Start a project
          </Button>
        </div>
      </div>
    </header>
  )
}
