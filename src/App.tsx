import { useEffect, useState } from 'react'
import type { Copy, Lang, Theme } from './content'
import { copy } from './content'
import Header from './components/Header'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Toolkit from './components/Toolkit'
import Contact from './components/Contact'
import Footer from './components/Footer'

function detectLang(): Lang {
  try {
    const saved = window.localStorage.getItem('lang')
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    /* localStorage unavailable */
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

function detectTheme(): Theme {
  try {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* localStorage unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang)
  const [theme, setTheme] = useState<Theme>(detectTheme)
  const t: Copy = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      /* localStorage unavailable */
    }
  }, [lang])

  useEffect(() => {
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      /* localStorage unavailable */
    }
  }, [theme])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [lang])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <div className={`site ${theme === 'dark' ? 'dark' : ''}`}>
        <Header
          lang={lang}
          onLangChange={setLang}
          theme={theme}
          onThemeToggle={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
          t={t}
        />
        <main id="main">
          <Hero lang={lang} t={t} />
          <Journey t={t} />
          <Projects t={t} />
          <Toolkit t={t} />
          <Contact lang={lang} t={t} />
        </main>
        <Footer t={t} />
      </div>
    </>
  )
}
