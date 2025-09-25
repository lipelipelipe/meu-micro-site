// Esta é nossa fonte única de verdade para os dados do blog.
// Em um aplicativo real, isso viria de um banco de dados, CMS ou arquivos Markdown.

export type Post = {
    slug: string;
    title: string;
    excerpt?: string; // Opcional, pois não é usado na página do post
    content: string;
  };
  
  export const posts: Post[] = [
    {
      slug: 'primeiro-artigo',
      title: 'Explorando o Vercel Blob',
      excerpt: 'Descubra como o Vercel Blob simplifica o armazenamento de arquivos em projetos Next.js...',
      content: `
        <p>O Vercel Blob é uma solução de armazenamento de arquivos de alta performance e baixo custo, projetada para funcionar perfeitamente com o ecossistema Vercel e Next.js.</p>
        <p>Ele permite que desenvolvedores façam upload, download e sirvam arquivos estáticos de forma segura e eficiente, sem a necessidade de configurar e gerenciar complexos buckets de S3 ou serviços similares. A integração via SDK, como visto na nossa rota <code>/api/upload</code>, abstrai toda a complexidade.</p>
      `,
    },
    {
      slug: 'segundo-artigo',
      title: 'Guia de Segurança para Tokens de API',
      excerpt: 'Aprenda as melhores práticas para gerenciar e proteger seus tokens de API, como o BLOB_READ_WRITE_TOKEN...',
      content: `
        <p>Tokens de API, como o <code>BLOB_READ_WRITE_TOKEN</code>, são chaves secretas que concedem acesso a recursos. É fundamental nunca expô-los no lado do cliente (código que roda no navegador).</p>
        <p>A abordagem correta, implementada neste projeto, é manter o token como uma variável de ambiente no servidor e criar um endpoint de API (<code>/api/upload</code>) que atua como um intermediário seguro. O cliente envia o arquivo para a nossa API, e é o nosso servidor que, de posse do token, se comunica com o serviço do Vercel Blob.</p>
      `,
    },
  ];