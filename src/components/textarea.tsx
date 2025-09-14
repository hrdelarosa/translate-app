type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={`flex-1 resize-none text-primary-text outline-none text-area ${className}`}
      {...props}
    ></textarea>
  )
}
