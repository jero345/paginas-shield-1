import { useEffect, useState } from 'react'
import { PhoneIcon } from '@phosphor-icons/react'
import { CtaButton } from './ui/Button'

/*
  Mobile only: sticky "Free assessment" bar. Hidden while the hero CTA or the form itself
  is on screen, so the form is always one tap away without covering it.
*/
export function MobileCta({ site }) {
  const { cta, firm } = site
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    const form = document.getElementById('register')
    if (!hero || !form) return
    let heroIn = true
    let formIn = false
    const update = () => setShow(!heroIn && !formIn)
    const heroIO = new IntersectionObserver(([e]) => {
      heroIn = e.isIntersecting
      update()
    })
    const formIO = new IntersectionObserver(
      ([e]) => {
        formIn = e.isIntersecting
        update()
      },
      { threshold: 0.2 },
    )
    heroIO.observe(hero)
    formIO.observe(form)
    return () => {
      heroIO.disconnect()
      formIO.disconnect()
    }
  }, [])

  return (
    <div
      inert={!show}
      aria-hidden={!show}
      className={`fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-30 flex gap-2.5 rounded-full bg-navy-900/86 p-2 shadow-bar backdrop-blur-lg backdrop-saturate-150 transition-transform duration-600 ease-spring md:hidden ${show ? 'translate-y-0' : 'translate-y-[140%]'}`}
    >
      <CtaButton className="flex-1 justify-between">{cta.short}</CtaButton>
      <a
        href={firm.phoneHref}
        aria-label={`Call ${firm.phone}`}
        className="grid w-12.5 shrink-0 place-items-center rounded-full bg-white/10 text-xl text-white ring-1 ring-white/14 ring-inset"
      >
        <PhoneIcon />
      </a>
    </div>
  )
}
