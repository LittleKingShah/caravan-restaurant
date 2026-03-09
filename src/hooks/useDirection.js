import { useTranslation } from 'react-i18next'
import { RTL_LANGS } from '../i18n'

export default function useDirection() {
  const { i18n } = useTranslation()
  const isRTL = RTL_LANGS.includes(i18n.language)

  return {
    isRTL,
    x: (val) => isRTL ? -val : val,
  }
}
