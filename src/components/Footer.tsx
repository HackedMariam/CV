import type { Copy } from '../content'
import { profile } from '../content'

interface Props {
  t: Copy
}

export default function Footer({ t }: Props) {
  return (
    <footer>
      <span className="monogram" aria-hidden="true">
        M<span>{profile.monogram.slice(1)}</span>
      </span>
      <span>{t.footer.note}</span>
      <span>{t.footer.rights}</span>
    </footer>
  )
}
