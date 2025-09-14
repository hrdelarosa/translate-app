type Variant = 'primary' | 'outline'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: Variant
}

export default function Button({
  children,
  variant = 'primary',
  ...props
}: Props) {
  const className = `cursor-pointer transition-colors ${
    variant === 'primary'
      ? 'flex items-center gap-4 bg-button hover:bg-button/90 outline-button-outline px-6 py-2.5 rounded-xl outline-1 disabled:outline-button/60 disabled:bg-button/60 disabled:cursor-not-allowed'
      : 'p-1.5 outline-primary-color hover:bg-secondary-color/30 rounded-lg outline-2 group'
  }`
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
