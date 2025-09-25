import type { MetadataRoute } from 'next';

// É importante que esta variável seja definida fora da função para que possa ser acessada.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * Gera o arquivo robots.txt para o site.
 * A exportação DEVE ser um 'export default' para que o Next.js a reconheça.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Aplica-se a todos os robôs (crawlers)
        allow: '/', // Permite acesso a todo o site
        disallow: ['/api/'], // Proíbe o acesso à pasta da API
      },
    ],
    // Informa aos robôs onde encontrar o sitemap.
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}