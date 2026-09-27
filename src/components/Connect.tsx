import type { Copy } from '../config'
import { links } from '../config'
import { ExternalIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Connect({ t }: { t: Copy }) {
  return (
    <section className="section" aria-labelledby="connect-label">
      <h2 className="label" id="connect-label">
        {t.connectLabel}
      </h2>
      <ul className="cards">
        <li>
          <a
            className="card"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="card__icon" />
            <span className="card__name">LinkedIn</span>
            <ExternalIcon className="card__ext" />
            <span className="sr-only">{t.opensInNewTab}</span>
          </a>
        </li>
        <li>
          <a
            className="card"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="card__icon" />
            <span className="card__name">GitHub</span>
            <ExternalIcon className="card__ext" />
            <span className="sr-only">{t.opensInNewTab}</span>
          </a>
        </li>
        <li>
          <a className="card" href={links.email} aria-label={t.emailAria}>
            <MailIcon className="card__icon" />
            <span className="card__name">{t.emailLabel}</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
