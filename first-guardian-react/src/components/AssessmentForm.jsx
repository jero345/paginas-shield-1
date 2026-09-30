import { PencilSimpleLineIcon } from '@phosphor-icons/react'
import { Container, Label, Lead, Shell, CORE, SECTION_Y } from './ui/layout'
import { CtaButton, CallLink } from './ui/Button'
import { Reveal } from './ui/motion'

/*
  Every "Get a free assessment" CTA on the page links to #register.
  FormSlot reserves the space: replace it with the simplified form when it is supplied.
*/
function FormSlot({ submitLabel }) {
  const field = (w = 'w-[42%]', tall = false) => (
    <div className="grid gap-2">
      <span className={`h-2.5 rounded-full bg-line ${w}`} />
      <span className={`rounded-[10px] bg-tint ring-1 ring-line ring-inset ${tall ? 'h-21' : 'h-11'}`} />
    </div>
  )

  return (
    <div role="region" aria-label="Assessment form placeholder" className={`${CORE} p-5.5 md:p-8`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-accent-wash py-1.5 pr-3.5 pl-2.5 text-[13.5px] font-semibold text-accent-ink ring-1 ring-accent-ink/18 ring-inset">
        <PencilSimpleLineIcon aria-hidden="true" />
        Form placeholder
      </span>
      <p className="mt-3 text-[15px] text-muted">The simplified form will be supplied separately. This space is reserved for it.</p>

      <div aria-hidden="true" className="my-6 grid gap-4.5 rounded-2xl border-[1.5px] border-dashed border-line-strong p-4.5 md:mt-7 md:mb-7.5 md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {field()}
          {field()}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {field()}
          {field()}
        </div>
        {field('w-[28%]', true)}
      </div>

      <CtaButton disabled className="w-full justify-between sm:w-auto sm:justify-start">
        {submitLabel}
      </CtaButton>
    </div>
  )
}

export function AssessmentForm({ site }) {
  const { form, cta, firm } = site
  return (
    <section id="register" className={`bg-tint ${SECTION_Y}`}>
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-18">
        <Reveal>
          <Label>{form.label}</Label>
          <h2 className="text-h2">{form.title}</h2>
          {form.leads.map((p, i) => (
            <Lead key={i} className={i > 0 ? 'mt-3.5' : ''}>
              {p}
            </Lead>
          ))}
          <CallLink phone={firm.phone} href={firm.phoneHref} className="mt-8" />
        </Reveal>

        <Reveal delay={1}>
          <Shell>
            <FormSlot submitLabel={cta.submit} />
          </Shell>
        </Reveal>
      </Container>
    </section>
  )
}
