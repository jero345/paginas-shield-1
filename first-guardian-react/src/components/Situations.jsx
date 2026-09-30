import { useId, useState } from 'react'
import { Container, Label, Lead, SECTION_Y } from './ui/layout'
import { CtaButton, CallLink } from './ui/Button'
import { Collapse, Reveal } from './ui/motion'
import { PlusToggle } from './ui/Toggles'

function SituationCard({ number, title, body }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div
      className={`rounded-2xl bg-white transition-[box-shadow,transform] duration-500 ease-spring ${
        open
          ? 'shadow-card ring-[1.5px] ring-navy-700 ring-inset'
          : 'ring-1 ring-line ring-inset md:hover:-translate-y-0.75 md:hover:shadow-card md:hover:ring-line-strong'
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className="grid w-full cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3.5 rounded-2xl py-4 pr-4 pl-4.5 text-left md:min-h-33 md:grid-cols-[minmax(0,1fr)_auto] md:grid-rows-[auto_1fr] md:items-stretch md:gap-x-3 md:gap-y-5.5 md:p-5 md:pb-5.5 lg:min-h-42"
        >
          <span className="self-center font-mono text-sm text-accent-ink">{number}</span>
          <span className="col-start-2 row-start-1 text-[16.5px] leading-[1.28] font-semibold tracking-[-0.014em] text-navy-900 md:col-span-2 md:col-start-1 md:row-start-2 md:self-end md:text-lg">
            {title}
          </span>
          <PlusToggle open={open} className="col-start-3 row-start-1 size-8 self-center text-[15px] md:col-start-2" />
        </button>
      </h3>
      <Collapse id={id} open={open}>
        <div className="px-4.5 pb-4.5 md:px-5 md:pb-5.5">
          <p className="border-t border-line-soft pt-4 text-[15px] leading-[1.55] text-muted md:text-[15.5px]">{body}</p>
        </div>
      </Collapse>
    </div>
  )
}

/* Eight situations: number and title first, the explanation opens on tap */
export function Situations({ site }) {
  const { situations, cta, firm } = site
  return (
    <section id="when" className={`bg-tint ${SECTION_Y}`}>
      <Container>
        <Reveal className="max-w-190">
          <Label>{situations.label}</Label>
          <h2 className="text-h2">{situations.title}</h2>
          <Lead>{situations.lead}</Lead>
        </Reveal>

        <Reveal className="mt-8 grid items-start gap-2.5 md:mt-12 md:grid-cols-2 md:gap-3.5 lg:grid-cols-4">
          {situations.items.map((item, i) => (
            <SituationCard key={item.title} number={String(i + 1).padStart(2, '0')} {...item} />
          ))}
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <CtaButton className="w-full justify-between sm:w-auto sm:justify-start">{cta.primary}</CtaButton>
          <CallLink phone={firm.phone} href={firm.phoneHref} />
        </Reveal>
      </Container>
    </section>
  )
}
