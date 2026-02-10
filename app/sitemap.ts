import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://startup-arogyamitraa-preregistratio.vercel.app'

  const pages = [
    '',               // home
    '/care-standards',
    '/about',
    '/features',
    '/contact',
    '/for-you',
    '/ecosystem'
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1.0 : 0.8,
  }))
}
