import type { MetadataRoute } from 'next'
import { metaData } from './lib/config'

// Add these exports for static export compatibility
export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  }
}