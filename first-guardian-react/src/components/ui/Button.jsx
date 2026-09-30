import { ArrowRightIcon, CheckIcon, PhoneIcon } from '@phosphor-icons/react'

const SIZES = {
  sm: { btn: 'gap-2.5 py-1.25 pr-1.25 pl-4.5 text-[15px]', icon: 'size-7.5 text-[15px]' },
  md: { btn: 'gap-3.5 py-1.75 pr-1.75 pl-6 text-base', icon: 'size-9 text-[17px]' },
  lg: { btn: 'gap-3.5 py-2 pr-2 pl-7 text-[17px]', icon: 'size-10.5 text-[19px]' },
}

/* Primary CTA: amber pill with the arrow nested in its own navy circle */
export function CtaButton({ href = '#register', size = 'md', disabled = false, className = '', children }) {
  const s = SIZES[size]
  const base = `group inline-flex items-center rounded-full bg-accent font-semibold leading-none whitespace-nowrap text-navy-900 ${s.btn} ${className}`
  const icon = (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full bg-navy-900 text-accent transition-transform duration-500 ease-spring ${disabled ? '' : 'group-hover:translate-x-0.75 group-hover:scale-105'} ${s.icon}`}
    >
      <ArrowRightIcon weight="bold" />
    </span>
  )

  if (disabled) {
    return (
      <span aria-disabled="true" className={`${base} cursor-not-allowed opacity-55`}>
        {children}
        {icon}
      </span>
    )
  }

  return (
    <a
      href={href}
      className={`${base} shadow-cta transition-[transform,background-color,box-shadow] duration-400 ease-spring hover:bg-accent-hover hover:shadow-cta-hover active:scale-[0.98]`}
    >
      {children}
      {icon}
    </a>
  )
}

export function CallLink({ phone, href, className = '' }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-2.5 font-semibold text-navy-800 ${className}`}>
      <span
        aria-hidden="true"
        className="grid size-8.5 place-items-center rounded-full bg-tint text-base ring-1 ring-line ring-inset transition-transform duration-500 ease-spring group-hover:-rotate-12"
      >
        <PhoneIcon />
      </span>
      Call {phone}
    </a>
  )
}

export function Tick({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full bg-accent-wash text-accent-ink ring-1 ring-accent-ink/12 ring-inset ${className}`}
    >
      <CheckIcon weight="bold" />
    </span>
  )
}
