import { motion } from 'motion/react'
import { Container, Label, SECTION_Y } from './ui/layout'
import { EASE, Reveal } from './ui/motion'

/* The line and the numbered nodes fill in sequence as the list scrolls into view */
export function HowItWorks({ site }) {
  const { how } = site
  const last = how.steps.length - 1

  return (
    <section id="how" className={SECTION_Y}>
      <Container>
        <Reveal className="max-w-190">
          <Label>{how.label}</Label>
          <h2 className="text-h2">{how.title}</h2>
        </Reveal>

        <motion.ol
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-10 grid lg:mt-15 lg:grid-cols-5 lg:gap-7"
        >
          {/* desktop track, from the first node centre to the last */}
          <span
            aria-hidden="true"
            className="absolute top-6.25 right-[calc((100%-112px)/5-25px)] left-6.25 hidden h-0.5 rounded-full bg-line lg:block"
          />
          <motion.span
            aria-hidden="true"
            variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1, transition: { duration: 1.5, ease: EASE, delay: 0.15 } } }}
            className="absolute top-6.25 right-[calc((100%-112px)/5-25px)] left-6.25 hidden h-0.5 origin-left rounded-full bg-navy-700 lg:block"
          />

          {how.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative z-1 grid grid-cols-[52px_minmax(0,1fr)] grid-rows-[auto_1fr] gap-x-5 pb-6.5 last:pb-0 lg:block lg:pb-0"
            >
              {i < last && (
                <>
                  {/* mobile connector down to the next node */}
                  <span aria-hidden="true" className="absolute top-6.5 -bottom-6.5 left-6.25 -z-10 w-0.5 bg-line lg:hidden" />
                  <motion.span
                    aria-hidden="true"
                    variants={{
                      hidden: { scaleY: 0 },
                      shown: { scaleY: 1, transition: { duration: 0.5, ease: EASE, delay: i * 0.26 + 0.3 } },
                    }}
                    className="absolute top-6.5 -bottom-6.5 left-6.25 -z-10 w-0.5 origin-top bg-navy-700 lg:hidden"
                  />
                </>
              )}
              <span
                aria-hidden="true"
                className="relative row-span-2 grid size-13 place-items-center rounded-full bg-white font-mono text-lg font-medium text-navy-700 shadow-[inset_0_0_0_2px_var(--color-navy-700),0_0_0_7px_var(--color-page)]"
              >
                {i + 1}
                {/* filled state fades in over the outline node */}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, scale: 0.6 },
                    shown: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE, delay: i * 0.26 + 0.15 } },
                  }}
                  className="absolute inset-0 grid place-items-center rounded-full bg-navy-700 text-white"
                >
                  {i + 1}
                </motion.span>
              </span>
              <h3 className="mt-3.25 text-lg tracking-[-0.012em] md:text-xl lg:mt-6">{step.title}</h3>
              <p className="col-start-2 mt-1 text-[15px] leading-[1.55] text-muted md:text-[15.5px] lg:mt-2">{step.body}</p>
            </li>
          ))}
        </motion.ol>
      </Container>
    </section>
  )
}
