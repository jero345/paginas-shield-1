import { ArrowUpRightIcon, CheckIcon } from '@phosphor-icons/react'
import { Container, SECTION_B } from './ui/layout'
import { CtaButton } from './ui/Button'
import { Reveal } from './ui/motion'

/* Always open: AFCA is free and people can complain themselves. CTA strip follows. */
export function AfcaFree({ site }) {
  const { afca, hero, cta } = site
  return (
    <section id="free" aria-labelledby="free-title" className={SECTION_B}>
      <Container>
        <Reveal className="surface-afca grid gap-4.5 rounded-3xl px-5.5 py-6.5 ring-1 ring-green-line ring-inset md:grid-cols-[auto_minmax(0,1fr)] md:gap-9 md:px-10 md:py-9 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div
            aria-hidden="true"
            className="grid size-15 place-items-center rounded-full bg-green text-[21px] font-bold tracking-[-0.03em] text-white ring-[6px] ring-green/10 md:size-21 md:text-[28px] md:ring-8"
          >
            $0
          </div>
          <div>
            <h2 id="free-title" className="text-h2-sm text-green-ink">
              {afca.title}
            </h2>
            <p className="mt-2.5 max-w-[66ch] text-green-body">{afca.body}</p>
          </div>
          <div className="flex flex-col gap-2.5 md:col-span-2 md:flex-row md:flex-wrap lg:col-span-1 lg:flex-col">
            {afca.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center justify-between gap-3.5 rounded-full bg-white py-3.25 pr-4.5 pl-5 font-semibold leading-none text-green-ink ring-1 ring-green-line ring-inset transition-shadow duration-300 hover:ring-[1.5px] hover:ring-green"
              >
                {l.label}
                <ArrowUpRightIcon
                  aria-hidden="true"
                  className="text-base transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-5 flex flex-col items-stretch gap-5 rounded-[22px] bg-white p-5 shadow-card ring-1 ring-line ring-inset md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:rounded-full md:py-4.5 md:pr-5 md:pl-7">
          <ul className="flex flex-col gap-1.5 text-[15.5px] font-medium text-navy-800 md:flex-row md:flex-wrap md:gap-x-6.5 md:gap-y-2">
            {hero.ticks.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckIcon aria-hidden="true" weight="bold" className="text-[15px] text-accent-ink" />
                {t}
              </li>
            ))}
          </ul>
          <CtaButton className="justify-between md:justify-start">{cta.primary}</CtaButton>
        </Reveal>
      </Container>
    </section>
  )
}
