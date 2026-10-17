import type { Copy } from '../content'

interface Props {
  t: Copy
}

export default function Toolkit({ t }: Props) {
  const { toolkit } = t

  return (
    <section className="section" id="toolkit">
      <div className="toolkit">
        <div className="section-heading">
          <span className="kicker">{toolkit.kicker}</span>
          <h2>{toolkit.title}</h2>
          <p>{toolkit.text}</p>
        </div>

        <div className="skill-cloud reveal">
          {toolkit.skills.map((skill) => (
            <span className={skill === toolkit.accent ? 'accent-skill' : undefined} key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
