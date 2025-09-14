import { toast } from 'sonner'
import { copyToClipboard } from '../utils/copyToClipboard'

interface Props {
  value: string
  translate: string | undefined
}

export function useCopy({ value, translate }: Props) {
  const copySourceText = () => {
    if (!value) return

    copyToClipboard(value)
    toast.success('Copied source text')
  }

  const copyTranslateText = () => {
    if (!translate) return

    copyToClipboard(translate)
    toast.success('Copied translation')
  }

  return {
    copySourceText,
    copyTranslateText,
  }
}
