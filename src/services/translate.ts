import type { TranslateResponse } from '../type'

interface Props {
  q: string
  langpair: string
}

export async function fetchTranslate({ q, langpair }: Props) {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        q
      )}&langpair=${langpair}`
    )
    const data = await res.json()

    return data as TranslateResponse
  } catch (error) {
    console.log(error)
    return null
  }
}
