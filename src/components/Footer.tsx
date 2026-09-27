import type { Copy } from '../config'
import { profile } from '../config'

export default function Footer({ t }: { t: Copy }) {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="footer__dot" aria-hidden="true">
        ·
      </span>
      <span>{t.location}</span>
    </footer>
  )
}
