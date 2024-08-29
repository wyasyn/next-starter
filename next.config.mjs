// @ts-check
import withPlaiceholder from '@plaiceholder/next'
import { hostname } from 'os'

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

export default withPlaiceholder(config)
