import { WarningIcon } from '@phosphor-icons/react'
import { Container, SECTION_B } from './ui/layout'
import { Reveal } from './ui/motion'

/* Kept visible but compact: horizontal banner on desktop, card on mobile */
export function ScamWarning({ site }) {
  const { scam } = site
  return (
    <section aria-labelledby="scam-title" className={SECTION_B}>
      <Container>
        <Reveal
          role="note"
          className="grid gap-3 rounded-[22px] bg-red-soft p-5.5 ring-1 ring-red-line ring-inset md:grid-cols-[auto_minmax(0,1fr)] md:gap-6 md:px-8 md:py-6.5"
        >
          <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-red text-[19px] text-white md:size-12 md:text-[22px]">
            <WarningIcon weight="bold" />
          </span>
          <div>
            <h2 id="scam-title" className="text-[19px] leading-[1.3] tracking-[-0.018em] text-red-ink md:text-[21px]">
              {scam.title}
            </h2>
            <p className="mt-1.5 text-[15px] leading-[1.6] text-red-body md:text-[15.5px] [&_a]:font-semibold [&_a]:whitespace-nowrap [&_a]:text-red-ink [&_a]:underline [&_a]:underline-offset-2">
              {scam.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
