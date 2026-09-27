import type { Copy, Lang } from '../config'
import { cv } from '../config'
import { DownloadIcon } from './icons'

interface Props {
  lang: Lang
  t: Copy
}

function fileName(lang: Lang) {
  return `CV-Mariam-Ben-Abdallah-${lang.toUpperCase()}.pdf`
}

export default function CvActions({ lang, t }: Props) {
  const other: Lang = lang === 'en' ? 'fr' : 'en'

  return (
    <section className="cta" aria-label={t.cvSection}>
      <a
        className="btn btn--primary"
        href={cv[lang]}
        target="_blank"
        rel="noopener noreferrer"
        download={fileName(lang)}
      >
        <DownloadIcon />
        <span>{t.cvPrimary}</span>
        <span className="btn__tag">{lang.toUpperCase()}</span>
      </a>
      <a
        className="btn btn--ghost"
        href={cv[other]}
        target="_blank"
        rel="noopener noreferrer"
        download={fileName(other)}
      >
        <span>{t.cvOther}</span>
      </a>
    </section>
  )
}
