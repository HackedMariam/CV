import type { Copy, Lang } from '../config'
import { profile } from '../config'

interface Props {
  lang: Lang
  onLangChange: (lang: Lang) => void
  t: Copy
}

export default function Header({ lang, onLangChange, t }: Props) {
  return (
    <header className="header">
      <span className="monogram" aria-hidden="true">
        {profile.monogram}
      </span>
      <div className="lang" role="group" aria-label={t.languageSwitch}>
        <button
          type="button"
          className="lang__btn"
          aria-pressed={lang === 'en'}
          onClick={() => onLangChange('en')}
        >
          EN
        </button>
        <button
          type="button"
          className="lang__btn"
          aria-pressed={lang === 'fr'}
          onClick={() => onLangChange('fr')}
        >
          FR
        </button>
      </div>
    </header>
  )
}
