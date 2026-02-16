import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const base =
  'inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-lime-400 text-zinc-950 hover:bg-lime-300 active:bg-lime-400/90',
  secondary:
    'bg-zinc-900 text-white hover:bg-zinc-800 active:bg-zinc-900/90',
  ghost:
    'bg-transparent text-zinc-900 hover:bg-zinc-900/5 active:bg-zinc-900/10',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cx(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
