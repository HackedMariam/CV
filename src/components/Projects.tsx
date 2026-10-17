import type { Copy } from '../content'
import { ArrowIcon } from './icons'
import agririskImage from '../assets/agririsk.png'

interface Props {
  t: Copy
}

export default function Projects({ t }: Props) {
  const { projects } = t
  const { featured } = projects

  return (
    <section className="section projects" id="projects">
      <div className="section-heading">
        <span className="kicker">{projects.kicker}</span>
        <h2>{projects.title}</h2>
        <p>{projects.intro}</p>
      </div>

      <article className="featured-card reveal">
        <div className="featured-copy">
          <span className="project-number">{featured.number}</span>
          <span className="project-type">{featured.type}</span>
          <h3>{featured.title}</h3>
          <p>{featured.text}</p>
        </div>

        <div className="risk-visual">
          <img src={agririskImage} alt={featured.imageAlt} loading="lazy" />
        </div>

        <div className="roadmap">
          <span className="project-type">{featured.roadmapLabel}</span>
          <div>
            {featured.roadmap.map((step, index) => (
              <span key={step}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                {step}
              </span>
            ))}
          </div>
        </div>
      </article>

      <div className="project-grid">
        {projects.items.map((item) => (
          <article className="project-card reveal" key={item.title}>
            <div className="card-top">
              <span className="project-number">{item.number}</span>
              {item.inProgress && <span className="pill progress">{projects.progressBadge}</span>}
            </div>

            <span className="project-type">{item.type}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <ul className="card-tags">
              {item.tags.map((tag) => (
                <li className="skill-tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <span className="card-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
