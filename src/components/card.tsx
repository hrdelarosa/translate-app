import Button from './button'
import arrowLeftRight from '../assets/arrows-left-rigth.svg'
import copy from '../assets/copy.svg'
import soundMax from '../assets/sound_max.svg'
import sortAlfa from '../assets/sort_alfa.svg'
import Separator from './separator'

interface Props extends React.HTMLAttributes<HTMLElement> {
  primaryCard?: boolean
  children: React.ReactNode
  textArea: React.ReactNode
  count?: number
  switchLanguage?: () => void
  translateText?: () => void
  loading?: boolean
  copyText?: () => void
  speakText?: () => void
}

export default function Card({
  className,
  primaryCard = false,
  children,
  textArea,
  count,
  switchLanguage,
  translateText,
  loading,
  copyText,
  speakText,
}: Props) {
  return (
    <section
      className={`text-secondary-text font-semibold border border-primary-color p-6 rounded-3xl h-full w-full flex flex-col gap-2.5 ${className}`}
    >
      <header className="flex items-center justify-between">
        {children}

        {primaryCard && (
          <Button variant="outline" onClick={switchLanguage}>
            <img src={arrowLeftRight} alt="Arrows Left Right" />
          </Button>
        )}
      </header>

      <Separator />

      {textArea}

      {primaryCard && (
        <span className="text-xs font-normal text-right">{count}/500</span>
      )}

      <footer className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <img src={soundMax} alt="Sound" onClick={speakText} />
          </Button>

          <Button variant="outline" onClick={copyText}>
            <img src={copy} alt="Copy" />
          </Button>
        </div>

        {primaryCard && (
          <Button variant="primary" onClick={translateText} disabled={loading}>
            <img src={sortAlfa} alt="Sort Alfa" />
            Translate
          </Button>
        )}
      </footer>
    </section>
  )
}
