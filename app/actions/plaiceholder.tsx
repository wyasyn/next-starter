'use server'
import { getPlaiceholder } from 'plaiceholder'

export const getBlurImage = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async res =>
      Buffer.from(await res.arrayBuffer())
    )

    const { base64 } = await getPlaiceholder(buffer)

    return `data:image/png;base64,${base64}`
  } catch (err) {
    console.log(err)

    return
  }
}
