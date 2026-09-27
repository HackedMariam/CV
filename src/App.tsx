import { useEffect, useState } from 'react'
import type { Copy, Lang } from './config'
import { copy } from './config'
import Header from './components/Header'
import Hero from './components/Hero'
import CvActions from './components/CvActions'
import Connect from './components/Connect'
import Availability from './components/Availability'
import Toolkit from './components/Toolkit'
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

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang)
  const t: Copy = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      /* localStorage unavailable */
    }
  }, [lang])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <div className="page">
        <Header lang={lang} onLangChange={setLang} t={t} />
        <main id="main">
          <Hero t={t} />
          <CvActions lang={lang} t={t} />
          <Connect t={t} />
          <Availability t={t} />
          <Toolkit t={t} />
        </main>
        <Footer t={t} />
      </div>
    </>
  )
}
