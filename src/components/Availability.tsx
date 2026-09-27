import type { Copy } from '../config'

export default function Availability({ t }: { t: Copy }) {
  return (
    <section className="section availability" aria-labelledby="availability-label">
      <h2 className="label" id="availability-label">
        {t.availabilityLabel}
      </h2>
      <p className="availability__main">{t.availabilityMain}</p>
      <p className="availability__sub">{t.availabilitySub}</p>
    </section>
  )
}
