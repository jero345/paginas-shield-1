export const SECTION_Y = 'py-14 md:py-[clamp(72px,8vw,112px)]'
export const SECTION_B = 'pb-14 md:pb-[clamp(72px,8vw,112px)]'

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-300 px-4.5 md:px-8 ${className}`}>{children}</div>
}

export function Label({ className = '', children }) {
  return (
    <p className={`mb-3.5 text-[15px] font-semibold tracking-[-0.005em] text-accent-ink ${className}`}>{children}</p>
  )
}

export function Lead({ className = '', children }) {
  return (
    <p className={`mt-4.5 max-w-[62ch] text-[17px] leading-[1.6] text-muted md:text-[19px] ${className}`}>{children}</p>
  )
}

/* Double-bezel container: tinted outer tray with a hairline, white core inside */
export function Shell({ className = '', children }) {
  return (
    <div className={`rounded-[26px] bg-navy-900/[0.035] p-1.5 ring-1 ring-navy-900/7 ring-inset ${className}`}>
      {children}
    </div>
  )
}

export const CORE = 'rounded-[20px] bg-white shadow-card'
