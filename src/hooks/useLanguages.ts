import { useState } from 'react'

export function useLanguages() {
  const [sourceLanguage, setSourceLanguage] = useState<string>('en')
  const [destinationLanguage, setDestinationLanguage] = useState<string>('fr')

  const changeSourceLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === destinationLanguage) return
    setSourceLanguage(e.target.value)
  }

  const changeDestinationLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === sourceLanguage) return
    setDestinationLanguage(e.target.value)
  }

  const changeLanguage = () => {
    setSourceLanguage(destinationLanguage)
    setDestinationLanguage(sourceLanguage)
  }

  return {
    sourceLanguage,
    destinationLanguage,
    changeSourceLanguage,
    changeDestinationLanguage,
    changeLanguage,
  }
}
