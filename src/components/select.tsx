interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

export default function Select({ children, ...props }: Props) {
  return (
    <select
      {...props}
      className="custom-select over hover:bg-primary-color focus:bg-primary-color px-2.5 py-1.5 rounded-xl transition-all"
    >
      {children}
    </select>
  )
}
