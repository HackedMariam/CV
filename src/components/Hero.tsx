import type { Copy } from '../config'
import { profile } from '../config'
import { PinIcon } from './icons'

export default function Hero({ t }: { t: Copy }) {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <p className="status">
        <span className="status__dot" aria-hidden="true" />
        {t.statusPill}
      </p>
      <h1 className="hero__name" id="hero-name">
        {profile.name}
      </h1>
      <p className="hero__role">{t.role}</p>
      <p className="hero__field">{t.field}</p>
      <p className="hero__location">
        <PinIcon />
        <span>{t.location}</span>
      </p>
    </section>
  )
}
