import { useEffect, useState } from 'react'
import { PhoneIcon } from '@phosphor-icons/react'
import { Container } from './ui/layout'
import { CtaButton } from './ui/Button'

export function Header({ site }) {
  const { firm, brand, nav, cta } = site
  const [current, setCurrent] = useState(null)

  // Highlight the nav item for the section in the middle of the viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1))
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [nav])

  return (
    <>
      <div className="bg-navy-950 text-[12.5px] text-footer md:text-sm">
        <Container className="flex min-h-8.5 items-center justify-between gap-4 py-1.5 md:min-h-9.5">
          <p>
            A service of <strong className="text-white">{firm.name}</strong>, {firm.tagline}
          </p>
          <a href={firm.phoneHref} className="hidden whitespace-nowrap md:inline">
            Call <strong className="text-white">{firm.phone}</strong>
          </a>
        </Container>
      </div>

      <header
        id="top"
        className="sticky top-0 z-20 border-b border-navy-900/8 bg-page/82 backdrop-blur-md backdrop-saturate-150"
      >
        <Container className="flex h-15 items-center justify-between gap-7 md:h-17">
          <a href="#top" className="flex flex-col leading-[1.15] whitespace-nowrap">
            <span className="text-[17px] font-bold tracking-[-0.022em] text-navy-900 md:text-[19px]">{brand.name}</span>
            <span className="text-xs text-muted md:text-[13px]">{brand.by}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map(({ label, href }) => {
              const active = current === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={active ? 'true' : undefined}
                  className={`rounded-full px-3.25 py-2 text-[15px] font-medium whitespace-nowrap transition-colors duration-300 ${active ? 'bg-navy-800 text-white' : 'text-ink hover:bg-navy-900/6'}`}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center">
            <div className="hidden md:block">
              <CtaButton size="sm">{cta.short}</CtaButton>
            </div>
            <a
              href={firm.phoneHref}
              aria-label={`Call ${firm.phone}`}
              className="grid size-10.5 place-items-center rounded-full bg-white text-[19px] text-navy-800 ring-1 ring-line ring-inset md:hidden"
            >
              <PhoneIcon />
            </a>
          </div>
        </Container>
      </header>
    </>
  )
}
