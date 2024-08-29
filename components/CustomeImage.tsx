import { getBlurImage } from '@/app/actions/plaiceholder'
import Image from 'next/image'

export default async function CustomeImage({
  src,
  title,
  width
}: {
  src: string
  title: string
  width: string
}) {
  const blur = await getBlurImage(src)
  if (!blur) return
  return (
    <div
      className={`relative aspect-[4/3] overflow-clip rounded-lg ${width} max-w-full`}
    >
      <Image
        className='inset-0 object-cover object-center'
        src={src}
        alt={title}
        fill
        placeholder='blur'
        blurDataURL={blur}
      />
    </div>
  )
}
