type Orientation = 'horizontal' | 'vertical'

interface Props {
  orientation?: Orientation
}

export default function Separator({ orientation = 'horizontal' }: Props) {
  const className =
    orientation === 'horizontal'
      ? 'h-[1.5px] w-full bg-primary-color/70 my-1'
      : 'w-[1.5px] h-full bg-primary-color/70'

  return <div className={className}></div>
}
