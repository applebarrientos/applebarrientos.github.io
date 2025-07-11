import type { MetadataRoute } from 'next'
import { metaData } from './lib/config'

// Add these exports for static export compatibility
export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: metaData.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add more URLs as needed
  ]
}