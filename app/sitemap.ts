import { MetadataRoute } from 'next';
import { posts } from '@/lib/posts'; // ATUALIZADO: Importando os posts

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw new Error('A variável de ambiente NEXT_PUBLIC_SITE_URL não está definida.');
  }

  // Mapeia os posts do blog para o formato do sitemap
  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(), // Em um site real, use a data de atualização real do post
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Rotas estáticas
  const staticRoutes = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
        url: `${siteUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const, // A lista de posts muda mais frequentemente
        priority: 0.7,
      },
  ];

  // Combina as rotas estáticas e dinâmicas
  return [...staticRoutes, ...blogRoutes];
}