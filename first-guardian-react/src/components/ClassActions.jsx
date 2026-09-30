import { useId, useState } from 'react'
import { ScalesIcon } from '@phosphor-icons/react'
import { Container, Label, SECTION_B } from './ui/layout'
import { Collapse, Reveal } from './ui/motion'
import { DisclosureButton } from './ui/Toggles'

const FIELDS = [
  ['proceeding', 'Proceeding'],
  ['court', 'Court'],
  ['firm', 'Law firm'],
  ['covers', 'Who it covers'],
]

/* Collapsed to a single row with "Learn more"; details shown as cards, not a table */
export function ClassActions({ site }) {
  const { classActions: ca } = site
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <section id="class-actions" className={SECTION_B}>
      <Container>
        <Reveal className="group/panel rounded-[22px] bg-white shadow-card ring-1 ring-line ring-inset md:rounded-[28px]">
          <div
            onClick={() => setOpen((o) => !o)}
            className="grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 gap-y-4.5 p-5.5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-6 md:px-9 md:py-7.5"
          >
            <span
              aria-hidden="true"
              className="grid size-12 place-items-center rounded-[14px] bg-tint text-[23px] text-navy-700 ring-1 ring-line ring-inset md:size-15 md:rounded-[18px] md:text-[28px]"
            >
              <ScalesIcon />
            </span>
            <div>
              <Label className="mb-1.5">{ca.label}</Label>
              <h2 className="text-h2-sm">{ca.title}</h2>
            </div>
            <DisclosureButton
              open={open}
              controls={id}
              openLabel={ca.open}
              closeLabel={ca.close}
              className="col-span-2 md:col-span-1"
            />
          </div>

          <Collapse id={id} open={open}>
            <div className="px-5.5 pb-6 md:px-9 md:pb-9">
              <p className="max-w-[62ch] text-[17px] leading-[1.6] text-muted md:text-[17.5px]">{ca.lead}</p>
              {ca.cases.map((c, i) => (
                <dl key={i} className="mt-6.5 grid gap-3 md:grid-cols-2">
                  {FIELDS.map(([key, term]) => (
                    <div key={key} className="rounded-2xl bg-tint px-5.5 py-5 ring-1 ring-line-soft ring-inset">
                      <dt className="mb-1.5 text-[13.5px] font-semibold text-accent-ink">{term}</dt>
                      <dd className="leading-[1.45] font-medium text-navy-900">{c[key]}</dd>
                    </div>
                  ))}
                </dl>
              ))}
              <p className="mt-4 text-sm text-soft">{ca.note}</p>
            </div>
          </Collapse>
        </Reveal>
      </Container>
    </section>
  )
}
