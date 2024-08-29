interface BackgroundBlurProp {
  size?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  color?: string
}

export default function BackgroundBlur({
  size = '290',
  top,
  bottom,
  left,
  right,
  color = 'accent'
}: BackgroundBlurProp) {
  return (
    <div
      className={`from-${color} absolute ${left && left} ${top && top} ${right && right} ${bottom && bottom} aspect-square w-[${size}px] bg-gradient-to-br via-transparent to-transparent blur-3xl`}
    >
      BackgroundBlur
    </div>
  )
}
