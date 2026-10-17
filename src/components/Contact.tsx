import type { Copy, Lang } from '../content'
import { cv, links } from '../content'
import { DownloadIcon, MailIcon } from './icons'

interface Props {
  lang: Lang
  t: Copy
}

export default function Contact({ lang, t }: Props) {
  const { contact } = t

  return (
    <section className="section contact" id="contact">
      <div className="contact-card reveal">
        <span className="contact-ring" aria-hidden="true" />
        <span className="kicker">{contact.kicker}</span>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        <div className="button-row">
          <a className="button" href={links.email}>
            <MailIcon />
            {contact.email}
          </a>
          <a className="button button-ghost" href={cv[lang]} download>
            <DownloadIcon />
            {contact.cv}
          </a>
        </div>
      </div>
    </section>
  )
}
