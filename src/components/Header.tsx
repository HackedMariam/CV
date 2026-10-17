import { useState } from 'react'
import type { Copy, Lang, Theme } from '../content'
import { profile } from '../content'
import { MoonIcon, SunIcon } from './icons'

interface Props {
  lang: Lang
  onLangChange: (lang: Lang) => void
  theme: Theme
  onThemeToggle: () => void
  t: Copy
}

export default function Header({ lang, onLangChange, theme, onThemeToggle, t }: Props) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <a className="monogram" href="#top" aria-label={profile.name}>
        M<span>{profile.monogram.slice(1)}</span>
      </a>

      <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
        <a href="#journey" onClick={close}>
          {t.nav.journey}
        </a>
        <a href="#projects" onClick={close}>
          {t.nav.projects}
        </a>
        <a href="#toolkit" onClick={close}>
          {t.nav.toolkit}
        </a>
        <a href="#contact" onClick={close}>
          {t.nav.contact}
        </a>
      </nav>

      <div className="nav-actions">
        <div className="language-toggle" role="group" aria-label={t.languageSwitch}>
          <button
            type="button"
            className={lang === 'en' ? 'active' : undefined}
            aria-pressed={lang === 'en'}
            onClick={() => onLangChange('en')}
          >
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={lang === 'fr' ? 'active' : undefined}
            aria-pressed={lang === 'fr'}
            onClick={() => onLangChange('fr')}
          >
            FR
          </button>
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={t.themeLabel}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={t.menuLabel}
          aria-expanded={open}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
  )
}
