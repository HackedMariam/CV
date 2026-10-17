import type { Copy } from '../content'

interface Props {
  t: Copy
}

export default function Journey({ t }: Props) {
  const { journey } = t

  return (
    <section className="section journey" id="journey">
      <div className="section-heading">
        <span className="kicker">{journey.kicker}</span>
        <h2>{journey.title}</h2>
        <p>{journey.intro}</p>
      </div>

      <div className="timeline">
        <div className="timeline-column">
          {journey.education.map((item) => (
            <article className="timeline-item reveal" key={item.title}>
              <span className="timeline-node" aria-hidden="true">
                {item.node}
              </span>
              <span className="item-date">{item.date}</span>
              <h3>{item.title}</h3>
              <strong>{item.org}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="experience-column">
          <span className="kicker">{journey.experienceTitle}</span>
          {journey.experience.map((item) => (
            <article className="experience-item reveal" key={item.title}>
              <span className="item-date">{item.date}</span>
              <div>
                <h3>{item.title}</h3>
                <strong>{item.org}</strong>
                {item.project && <p className="exp-project">{item.project}</p>}
                <ul className="exp-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="skill-tags">
                  {item.skills.map((skill) => (
                    <li className="skill-tag" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
