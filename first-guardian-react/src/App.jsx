import { MotionConfig } from 'motion/react'
import { site } from './content/firstGuardian'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { DateBand } from './components/DateBand'
import { HowItWorks } from './components/HowItWorks'
import { AfcaFree } from './components/AfcaFree'
import { Situations } from './components/Situations'
import { WhereThingsStand } from './components/WhereThingsStand'
import { Fees } from './components/Fees'
import { ClassActions } from './components/ClassActions'
import { ScamWarning } from './components/ScamWarning'
import { AssessmentForm } from './components/AssessmentForm'
import { Questions } from './components/Questions'
import { Footer } from './components/Footer'
import { MobileCta } from './components/MobileCta'

/* Section order follows the design brief (29 September 2026) */
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="absolute -top-20 left-4 z-50 rounded-full bg-navy-900 px-4.5 py-3 font-semibold text-white transition-[top] duration-300 focus:top-3"
      >
        Skip to content
      </a>
      <Header site={site} />
      <main id="main">
        <Hero site={site} />
        <DateBand site={site} />
        <HowItWorks site={site} />
        <AfcaFree site={site} />
        <Situations site={site} />
        <WhereThingsStand site={site} />
        <Fees site={site} />
        <ClassActions site={site} />
        <ScamWarning site={site} />
        <AssessmentForm site={site} />
        <Questions site={site} />
      </main>
      <Footer site={site} />
      <MobileCta site={site} />
    </MotionConfig>
  )
}
