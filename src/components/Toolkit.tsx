import type { Copy } from '../config'
import { skills } from '../config'

export default function Toolkit({ t }: { t: Copy }) {
  return (
    <section className="section" aria-labelledby="toolkit-label">
      <h2 className="label" id="toolkit-label">
        {t.toolkitLabel}
      </h2>
      <ul className="chips">
        {skills.map((skill) => (
          <li className="chip" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
