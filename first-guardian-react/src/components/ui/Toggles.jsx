import { CaretDownIcon, PlusIcon } from '@phosphor-icons/react'

/* Round plus that turns into a close mark when its item is open */
export function PlusToggle({ open, outline = false, className = '' }) {
  const closed = outline ? 'bg-white text-navy-800 ring-1 ring-line ring-inset' : 'bg-tint text-navy-800'
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full transition-[transform,background-color,color] duration-500 ease-spring ${open ? 'rotate-45 bg-navy-800 text-white' : closed} ${className}`}
    >
      <PlusIcon weight="bold" />
    </span>
  )
}

/*
  Pill button for the collapsible panels. It has no click handler of its own: the panel
  header owns the click, so the whole header is a target and the button carries the
  keyboard focus and ARIA state.
*/
export function DisclosureButton({ open, controls, openLabel, closeLabel, className = '' }) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={controls}
      className={`inline-flex cursor-pointer items-center gap-3 justify-self-start rounded-full bg-tint py-1.75 pr-1.75 pl-5.5 text-[15.5px] font-semibold whitespace-nowrap text-navy-800 ring-1 ring-line ring-inset transition-colors duration-300 group-hover/panel:bg-tint-hover ${className}`}
    >
      {open ? closeLabel : openLabel}
      <span
        aria-hidden="true"
        className={`grid size-8.5 place-items-center rounded-full bg-navy-800 text-[15px] text-white transition-transform duration-500 ease-spring ${open ? 'rotate-180' : ''}`}
      >
        <CaretDownIcon weight="bold" />
      </span>
    </button>
  )
}
