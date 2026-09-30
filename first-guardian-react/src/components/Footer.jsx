import { Container } from './ui/layout'

const LINK = 'text-[#e4eaf3] underline decoration-[#e4eaf3]/35 underline-offset-4 transition-[text-decoration-color] duration-300 hover:decoration-[#e4eaf3]'

export function Footer({ site }) {
  const { firm, footer } = site
  return (
    // Extra bottom padding on mobile keeps the legal text clear of the sticky CTA bar
    <footer className="bg-navy-950 pt-12 pb-30 text-[14.5px] text-footer md:pt-16 md:pb-10">
      <Container>
        <div className="mb-9 grid gap-7 md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
          <div>
            <h2 className="mb-3 text-[17px] tracking-[-0.012em] text-white">{firm.name}</h2>
            <p className="mb-2">
              {firm.address[0]}
              <br />
              {firm.address[1]}
            </p>
            <p>
              <a href={firm.phoneHref} className={LINK}>
                {firm.phone}
              </a>
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-[17px] tracking-[-0.012em] text-white">Free help</h2>
            {footer.freeHelp.map((f) => (
              <p key={f.href} className="mb-2">
                {f.label}:{' '}
                <a href={f.href} target="_blank" rel="noopener" className={LINK}>
                  {f.link}
                </a>
              </p>
            ))}
          </div>
          <div>
            <h2 className="mb-3 text-[17px] tracking-[-0.012em] text-white">This site</h2>
            {footer.siteLinks.map((l) => (
              <p key={l.href} className="mb-2">
                <a href={l.href} className={LINK}>
                  {l.label}
                </a>
              </p>
            ))}
            <p>{footer.updated}</p>
          </div>
        </div>
        <p className="border-t border-white/12 pt-5.5 text-[13px] leading-[1.6] text-footer-soft">{footer.legal}</p>
      </Container>
    </footer>
  )
}
