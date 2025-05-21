import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.expert8-solution.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.expert8-solution.com/courses',
      lastModified: new Date(),
    },
    {
      url: 'https://www.expert8-solution.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.expert8-solution.com/about',
      lastModified: new Date(),
    },
  ]
}
