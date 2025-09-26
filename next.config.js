/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // ADICIONAR ESTA SEÇÃO INTEIRA
  async headers() {
    return [
      {
        // Aplicar estes cabeçalhos apenas à rota do sitemap
        source: '/sitemap.xml',
        headers: [
          {
            // O cabeçalho X-Robots-Tag dá instruções explícitas de rastreamento
            key: 'X-Robots-Tag',
            // 'index, follow' instrui o Google a indexar e seguir os links
            // Os outros parâmetros são padrões permissivos que ajudam na descoberta
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
