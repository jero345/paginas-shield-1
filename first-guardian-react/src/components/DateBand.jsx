import { CalendarBlankIcon } from '@phosphor-icons/react'
import { Container } from './ui/layout'
import { Reveal } from './ui/motion'

/* Sits over the bottom edge of the hero so the date reads as part of the opening screen */
export function DateBand({ site }) {
  const { date } = site
  return (
    <section aria-labelledby="date-label" className="relative z-1 -mt-22.5 md:-mt-26">
      <Container>
        <Reveal className="surface-date relative grid gap-7 overflow-hidden rounded-3xl px-6 py-8 text-on-navy shadow-deep md:rounded-[28px] md:px-15 md:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p id="date-label" className="flex items-center gap-2.5 text-[15px] font-semibold text-accent">
              <CalendarBlankIcon aria-hidden="true" className="text-[19px]" />
              {date.label}
            </p>
            <p className="mt-4 text-date font-semibold text-white tabular-nums">
              {date.day} <span className="text-accent">{date.year}</span>
            </p>
          </div>
          <div>
            <p className="text-base leading-[1.65] md:text-[17px]">{date.body}</p>
            <p className="mt-4.5 border-t border-white/12 pt-4 text-sm text-on-navy-soft">{date.source}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
