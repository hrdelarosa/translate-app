import { useState } from 'react'
import { fetchTranslate } from '../services/translate'

export function useTranslate() {
  const [value, setValue] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const [translate, setTranslate] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 500) return

    setCount(e.target.value.length)
    setValue(e.target.value)
  }

  const translateText = async ({
    sourceLanguage,
    destinationLanguage,
  }: {
    sourceLanguage: string
    destinationLanguage: string
  }) => {
    setLoading(true)
    const translate = await fetchTranslate({
      q: value,
      langpair: `${sourceLanguage}|${destinationLanguage}`,
    })

    setTranslate(translate?.responseData.translatedText)
    setLoading(false)
  }

  const changeTranslate = () => {
    setValue(translate || '')
    setTranslate(undefined)
    setCount(translate?.length || 0)
  }

  return {
    value,
    count,
    onChangeText,
    translateText,
    translate,
    loading,
    changeTranslate,
  }
}
