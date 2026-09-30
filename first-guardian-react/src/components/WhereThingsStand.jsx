import { useId, useState } from 'react'
import { Container, Label, SECTION_Y } from './ui/layout'
import { Collapse, Reveal } from './ui/motion'
import { DisclosureButton } from './ui/Toggles'

const DOT = 'shadow-[inset_0_0_0_3px_var(--color-navy-700),0_0_0_5px_#fff] bg-white'
const DOT_NOW = 'shadow-[inset_0_0_0_3px_var(--color-accent-ink),0_0_0_5px_#fff] bg-accent'

/* Collapsed by default: heading, a preview strip of the dates, and "View timeline" */
export function WhereThingsStand({ site }) {
  const { status } = site
  const [open, setOpen] = useState(false)
  const id = useId()
  const lastIndex = status.items.length - 1

  return (
    <section id="status" className={SECTION_Y}>
      <Container>
        <Reveal>
          <div className="group/panel rounded-[22px] bg-white shadow-card ring-1 ring-line ring-inset md:rounded-[28px]">
            <div
              onClick={() => setOpen((o) => !o)}
              className="grid cursor-pointer gap-4.5 px-5.5 py-6.5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-x-9 md:gap-y-0 md:px-11 md:py-10"
            >
              <div>
                <Label>{status.label}</Label>
                <h2 className="text-h2">{status.title}</h2>
              </div>
              <DisclosureButton open={open} controls={id} openLabel={status.open} closeLabel={status.close} />

              <Collapse open={!open} className="hidden md:col-span-2 md:block">
                <ol aria-hidden="true" className="relative mt-7 grid grid-cols-6 gap-3 pt-1.5 font-mono">
                  <span className="absolute top-4 right-1.25 left-1.25 h-px bg-line" />
                  {status.items.map((item, i) => (
                    <li
                      key={item.when}
                      className={`relative pt-6 text-[13px] leading-[1.35] ${i === lastIndex ? 'font-medium text-accent-ink' : 'text-soft'}`}
                    >
                      <span
                        className={`absolute top-1.25 left-0 size-2.75 rounded-full ${
                          i === lastIndex
                            ? 'bg-accent shadow-[inset_0_0_0_2px_var(--color-accent-ink)]'
                            : 'bg-white shadow-[inset_0_0_0_2px_var(--color-navy-600)]'
                        }`}
                      />
                      {item.when}
                    </li>
                  ))}
                </ol>
              </Collapse>
            </div>

            <Collapse id={id} open={open}>
              <ol className="px-5.5 pb-7 md:px-11 md:pb-11 md:pt-1">
                {status.items.map((item, i) => {
                  const first = i === 0
                  const last = i === lastIndex
                  return (
                    <li key={item.when} className="relative grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-10">
                      {/* spine, mobile: runs through the date and the entry */}
                      <span
                        aria-hidden="true"
                        className={`absolute -left-px w-0.5 bg-line lg:hidden ${first ? 'top-6.5' : 'top-0'} ${last ? 'h-6.5' : 'bottom-0'}`}
                      />
                      <time className="pt-4.5 pl-8.5 font-mono text-sm font-medium text-accent-ink lg:pt-5.5 lg:pl-0 lg:text-right">
                        {item.when}
                      </time>
                      <div className={`relative pt-1 pl-8.5 lg:pt-5 ${last ? 'pb-1' : 'pb-6.5'}`}>
                        {/* spine, desktop: starts and ends on the dots */}
                        <span
                          aria-hidden="true"
                          className={`absolute -left-px hidden w-0.5 bg-line lg:block ${first ? 'top-8.25' : 'top-0'} ${last ? 'h-8.25' : 'bottom-0'}`}
                        />
                        <span
                          aria-hidden="true"
                          className={`absolute -top-4.75 -left-1.75 z-1 size-3.5 rounded-full lg:top-6.5 ${last ? DOT_NOW : DOT}`}
                        />
                        <h3 className="text-lg md:text-[19px]">{item.title}</h3>
                        <p className="mt-1.5 max-w-[62ch] text-[15px] text-muted md:text-base">{item.body}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </Collapse>
          </div>
          <p className="mt-4.5 pl-1 text-sm text-soft">{status.updated}</p>
        </Reveal>
      </Container>
    </section>
  )
}
