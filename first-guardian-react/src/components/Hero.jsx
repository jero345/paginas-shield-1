import { ArrowDownIcon, VaultIcon } from '@phosphor-icons/react'
import { Container, Shell, CORE } from './ui/layout'
import { CtaButton, CallLink, Tick } from './ui/Button'
import { Reveal } from './ui/motion'

export function Hero({ site }) {
  const { hero, cta, firm } = site
  return (
    <section id="hero" className="surface-hero relative overflow-hidden pt-10 pb-29.5 md:pt-19 md:pb-37.5">
      <Container>
        <Reveal
          as="p"
          className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-3.5 pl-1.75 text-[13px] font-medium text-navy-700 shadow-tag md:text-[14.5px]"
        >
          <span aria-hidden="true" className="grid size-6.5 place-items-center rounded-full bg-tint text-[15px]">
            <VaultIcon />
          </span>
          {hero.tag}
        </Reveal>

        <Reveal as="h1" delay={1} className="mt-4.5 max-w-270 text-display md:mt-6">
          {hero.title}
        </Reveal>

        <div className="mt-5.5 grid items-start gap-7.5 md:mt-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-18">
          <Reveal delay={2}>
            <p className="max-w-[56ch] text-[17px] leading-[1.55] text-muted md:text-xl">{hero.sub}</p>
            <div className="mt-6.5 flex flex-wrap items-center gap-x-7 gap-y-4.5 md:mt-8.5">
              <CtaButton size="lg" className="w-full justify-between sm:w-auto sm:justify-start">
                {cta.primary}
              </CtaButton>
              <a
                href="#free"
                className="group mx-auto inline-flex items-center gap-2 font-medium text-navy-700 underline decoration-navy-700/30 decoration-[1.5px] underline-offset-[6px] transition-[text-decoration-color] duration-300 hover:decoration-navy-700 sm:mx-0"
              >
                {hero.secondary}
                <ArrowDownIcon aria-hidden="true" className="transition-transform duration-500 ease-spring group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <Shell>
              <ul className={`${CORE} px-5 py-1 md:px-7 md:py-2`}>
                {hero.ticks.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-4 border-t border-line-soft py-3.5 text-[17px] font-semibold tracking-[-0.012em] text-navy-900 first:border-t-0 md:py-4.5 md:text-[19px]"
                  >
                    <Tick className="size-7.5 text-sm md:size-8.5 md:text-base" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="px-4 pt-3.5 pb-2.5 md:px-5.5">
                <CallLink phone={firm.phone} href={firm.phoneHref} className="text-[15px]" />
              </div>
            </Shell>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
