import type { Copy, Lang } from '../content'
import { cv, links, profile } from '../content'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

interface Props {
  lang: Lang
  t: Copy
}

export default function Hero({ lang, t }: Props) {
  const other: Lang = lang === 'en' ? 'fr' : 'en'
  const { hero } = t

  return (
    <section className="hero" id="top">
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />

      <div className="hero-content">
        <span className="status reveal">{hero.status}</span>

        <span className="kicker reveal">{hero.kicker}</span>
        <h1 className="reveal">
          {profile.firstName} <em>{profile.lastName}</em>
        </h1>

        <div className="hero-meta reveal">
          <div>
            <strong>{hero.role}</strong>
            <span>{hero.field}</span>
            <span>{hero.location}</span>
          </div>
          <p>{hero.bio}</p>
        </div>

        <div className="hero-footer reveal">
          <div className="button-row">
            <div className="cv-group">
              <a className="button" href={cv[lang]} download>
                <DownloadIcon />
                {hero.cvPrimary}
              </a>
              <span>{hero.cvHint}</span>
              <a
                className="button button-ghost"
                href={cv[other]}
                download
                aria-label={`${hero.cvOtherHint} — ${other.toUpperCase()}`}
              >
                {other.toUpperCase()}
              </a>
            </div>
          </div>

          <div className="socials">
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label={hero.linkedin}>
              <LinkedInIcon />
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" aria-label={hero.github}>
              <GitHubIcon />
            </a>
            <a href={links.email} aria-label={hero.email}>
              <MailIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="location-mark" aria-hidden="true">
        <strong>{hero.location}</strong>
        {profile.coords.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>
    </section>
  )
}
