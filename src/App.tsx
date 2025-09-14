import { Toaster } from 'sonner'
import Background from './components/background'
import logo from './assets/logo.svg'
import Card from './components/card'
import Textarea from './components/textarea'
import Select from './components/select'
import { useTranslate } from './hooks/useTranslate'
import { useLanguages } from './hooks/useLanguages'
import { useCopy } from './hooks/useCopy'
import { COMMON_LANGUAGES } from './constants/languages'
import { useSpeak } from './hooks/useSpeak'

function App() {
  const {
    value,
    count,
    onChangeText,
    translateText,
    translate,
    loading,
    changeTranslate,
  } = useTranslate()
  const {
    sourceLanguage,
    destinationLanguage,
    changeSourceLanguage,
    changeDestinationLanguage,
    changeLanguage,
  } = useLanguages()
  const { copySourceText, copyTranslateText } = useCopy({
    value,
    translate,
  })
  const { speakTextSource, speakTextTranslate } = useSpeak({
    value,
    translate,
    sourceLanguage,
    destinationLanguage,
  })

  const switchLanguages = () => {
    changeLanguage()
    changeTranslate()
  }

  return (
    <div className="relative h-screen w-screen">
      <Toaster position="bottom-center" richColors closeButton theme="dark" />

      <Background />

      <div className="flex flex-col items-center justify-center gap-8 h-full md:max-w-4xl xl:max-w-7xl w-full md:mx-auto">
        <header>
          <img src={logo} alt="Logo Translate App" />
        </header>

        <main className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 gap-4 h-[560px] xl:h-[360px] w-full px-3">
          <Card
            className="bg-card"
            primaryCard
            count={count}
            textArea={
              <Textarea
                placeholder="Write or paste text here."
                className=""
                value={value}
                onChange={onChangeText}
              />
            }
            switchLanguage={switchLanguages}
            translateText={() =>
              translateText({
                sourceLanguage,
                destinationLanguage,
              })
            }
            loading={loading}
            copyText={copySourceText}
            speakText={speakTextSource}
          >
            <Select value={sourceLanguage} onChange={changeSourceLanguage}>
              {COMMON_LANGUAGES.map((language) => (
                <option
                  key={language.code}
                  value={language.code}
                  className="flex items-center gap-3 bg-primary-color text-primary-text font-semibold px-2.5 py-1 transition-colors"
                >
                  {language.name}
                </option>
              ))}
            </Select>
          </Card>

          <Card
            className="bg-card-secondary"
            textArea={<Textarea value={translate || ''} readOnly />}
            copyText={copyTranslateText}
            speakText={speakTextTranslate}
          >
            <Select
              value={destinationLanguage}
              onChange={changeDestinationLanguage}
            >
              {COMMON_LANGUAGES.map((language) => (
                <option
                  key={language.code}
                  value={language.code}
                  className="flex items-center gap-3 bg-primary-color text-primary-text font-semibold px-2.5 py-1 transition-colors"
                >
                  {language.name}
                </option>
              ))}
            </Select>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default App
