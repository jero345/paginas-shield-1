import { CheckIcon } from '@phosphor-icons/react'
import { Container, Label, SECTION_B } from './ui/layout'
import { CtaButton } from './ui/Button'
import { Reveal } from './ui/motion'

/* Always visible. Scan first ($0 upfront, no win no fee, $5,000 fixed), then the detail. */
export function Fees({ site }) {
  const { fees, cta } = site
  return (
    <section id="fees" className={SECTION_B}>
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-18">
        <Reveal className="surface-fee relative overflow-hidden rounded-3xl px-5.5 py-7.5 text-on-navy shadow-deep md:rounded-[28px] md:p-12">
          <h2 className="text-fee text-white">{fees.title}</h2>
          <p className="mt-1.5 text-[21px] font-semibold tracking-[-0.012em] text-accent">{fees.upfront}</p>

          <div className="mt-8 mb-2.5 grid grid-cols-2 border-y border-white/14">
            {fees.figures.map((f, i) => (
              <p key={f.value} className={`py-6 ${i > 0 ? 'border-l border-white/14 pl-4.5 md:pl-7.5' : ''}`}>
                <span className="block text-figure font-semibold text-white tabular-nums">{f.value}</span>
                <span className="mt-2.5 block text-[13.5px] text-on-navy-soft md:text-[14.5px]">{f.caption}</span>
              </p>
            ))}
          </div>

          <ul className="[&_strong]:text-accent-soft">
            {fees.points.map((point, i) => (
              <li
                key={i}
                className="grid grid-cols-[22px_minmax(0,1fr)] gap-3.5 border-t border-white/10 py-3.25 text-[15px] leading-[1.5] first:border-t-0 md:text-base"
              >
                <CheckIcon aria-hidden="true" weight="bold" className="mt-0.75 text-[17px] text-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={1}>
          <Label>{fees.noteLabel}</Label>
          <h2 className="mb-1.5 text-h2">{fees.noteTitle}</h2>
          {fees.note.map((p) => (
            <p key={p} className="mt-4 max-w-[58ch] text-muted">
              {p}
            </p>
          ))}
          <CtaButton className="mt-7.5 w-full justify-between sm:w-auto sm:justify-start">{cta.primary}</CtaButton>
        </Reveal>
      </Container>
    </section>
  )
}
