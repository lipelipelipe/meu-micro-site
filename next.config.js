/**
 * @type {import('next').NextConfig}
 *
 * Configuração avançada para o projeto Next.js.
 * Este objeto define o comportamento do compilador, otimizações de imagem,
 * e outras funcionalidades do framework.
 *
 * Referência: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
    // Ativa o Strict Mode do React, que ajuda a identificar problemas potenciais
    // na aplicação, executando certas funções duas vezes em desenvolvimento.
    // Essencial para manter a qualidade e a robustez do código.
    reactStrictMode: true,
  
    // Utiliza o compilador SWC (Speedy Web Compiler) da Vercel para minificar o JavaScript.
    // É significativamente mais rápido que o Terser, o padrão anterior,
    // acelerando os tempos de build em produção.
    swcMinify: true,
  
    // Configuração de otimização de imagens (`next/image`).
    // Para usar imagens de fontes externas (como o Vercel Blob), é mandatório
    // especificar os domínios permitidos para evitar abuso de otimização
    // e garantir a segurança.
    images: {
      // A propriedade `remotePatterns` é a abordagem moderna e mais segura para
      // permitir domínios, em vez da antiga propriedade `domains`.
      // Ela permite especificar protocolo, hostname e porta com wildcards.
      remotePatterns: [
        {
          protocol: 'https',
          // O hostname para os arquivos do Vercel Blob segue este padrão.
          // O wildcard '*' permite que qualquer URL de blob gerada para seu projeto seja otimizada.
          hostname: '*.public.blob.vercel-storage.com',
          port: '',
          pathname: '/**', // Permite qualquer caminho de arquivo dentro do domínio.
        },
      ],
    },
  };
  
  module.exports = nextConfig;