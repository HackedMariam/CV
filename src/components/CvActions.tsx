import type { Copy, Lang } from '../config'
import { cv } from '../config'
import { DownloadIcon } from './icons'

interface Props {
  lang: Lang
  t: Copy
}

export default function CvActions({ lang, t }: Props) {
  return (
    <section className="cta" aria-label={t.cvSection}>
      <a
        className="btn btn--primary"
        href={cv[lang]}
        target="_blank"
        rel="noopener noreferrer"
        download={`CV-Mariam-Ben-Abdallah-${lang.toUpperCase()}.pdf`}
      >
        <DownloadIcon />
        <span>{t.cvPrimary}</span>
        <span className="btn__tag">{lang.toUpperCase()}</span>
      </a>
    </section>
  )
}
