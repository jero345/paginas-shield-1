import { useId, useState } from 'react'
import { Container, Label, SECTION_Y } from './ui/layout'
import { CtaButton, CallLink } from './ui/Button'
import { Collapse, Reveal } from './ui/motion'
import { PlusToggle } from './ui/Toggles'

function QuestionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className="grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-0.5 py-5 text-left text-[17px] leading-[1.35] font-semibold tracking-[-0.014em] text-navy-900 transition-colors duration-300 hover:text-navy-600 md:gap-6 md:px-1 md:py-6 md:text-[19px]"
        >
          {q}
          <PlusToggle open={open} outline className="size-8.5 text-[15px] md:size-9.5" />
        </button>
      </h3>
      <Collapse id={id} open={open}>
        <div className="pr-2 pb-5.5 pl-0.5 md:pr-18 md:pb-7 md:pl-1">
          <p className="max-w-[66ch] text-[15.5px] text-muted md:text-[16.5px]">{a}</p>
        </div>
      </Collapse>
    </div>
  )
}

/* Questions only; the answer opens on tap. Side column stays pinned on desktop. */
export function Questions({ site }) {
  const { faq, cta, firm } = site
  return (
    <section id="faq" className={SECTION_Y}>
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-18">
        <Reveal className="lg:sticky lg:top-25">
          <Label>{faq.label}</Label>
          <h2 className="text-h2">{faq.title}</h2>
          <CtaButton className="mt-7.5 w-full justify-between sm:w-auto sm:justify-start">{cta.primary}</CtaButton>
          <div className="mt-4.5">
            <CallLink phone={firm.phone} href={firm.phoneHref} />
          </div>
        </Reveal>

        <Reveal delay={1} className="border-t border-line">
          {faq.items.map((item) => (
            <QuestionItem key={item.q} {...item} />
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
