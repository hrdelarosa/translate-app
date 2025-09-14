import { voicesCache } from '../constants/languages'

interface Props {
  value: string
  translate: string | undefined
  sourceLanguage: string
  destinationLanguage: string
}

export function useSpeak({
  value,
  translate,
  sourceLanguage,
  destinationLanguage,
}: Props) {
  const speakTextSource = () => {
    if (!value) return

    const voice = voicesCache[sourceLanguage] || voicesCache['en']
    const utterance = new SpeechSynthesisUtterance(value)

    if (voice) utterance.voice = voice

    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }

  const speakTextTranslate = () => {
    if (!translate) return

    const voice = voicesCache[destinationLanguage] || voicesCache['en']
    const utterance = new SpeechSynthesisUtterance(translate)

    if (voice) utterance.voice = voice

    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }

  return {
    speakTextSource,
    speakTextTranslate,
  }
}
