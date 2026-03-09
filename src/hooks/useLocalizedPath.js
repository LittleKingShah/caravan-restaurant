import { useParams } from 'react-router-dom'
import { DEFAULT_LANG } from '../i18n'

export default function useLocalizedPath() {
  const { lang } = useParams()
  const currentLang = lang || DEFAULT_LANG

  return function localizedPath(path) {
    // Handle hash links like /#about → /en/#about
    if (path.startsWith('/#')) {
      return `/${currentLang}${path}`
    }
    // Handle absolute paths like /menu → /en/menu
    if (path.startsWith('/')) {
      return `/${currentLang}${path}`
    }
    return `/${currentLang}/${path}`
  }
}
