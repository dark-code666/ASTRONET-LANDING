type FooterLink = {
  label: string
  href: string
}

export type FooterProps = {
  links?: FooterLink[]
}

export default function Footer({
  links = [
    { label: 'Services', href: '#services' },
    { label: 'Case studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
}: FooterProps) {
  return (
    <footer className="border-t border-zinc-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-950">Astronet</div>
            <div className="mt-1 text-sm text-zinc-600">
              Modern software for teams that move fast.
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
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
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Astronet. All rights reserved.
          </div>
          <div className="text-xs text-zinc-500">
            Crafted with React + TypeScript + Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}
