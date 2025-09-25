import Link from 'next/link';
import { notFound } from 'next/navigation';

// Simulação de dados novamente. Em um projeto real, você buscaria apenas o post necessário.
const posts = [
  {
    slug: 'primeiro-artigo',
    title: 'Explorando o Vercel Blob',
    content: `
      <p>O Vercel Blob é uma solução de armazenamento de arquivos de alta performance e baixo custo, projetada para funcionar perfeitamente com o ecossistema Vercel e Next.js.</p>
      <p>Ele permite que desenvolvedores façam upload, download e sirvam arquivos estáticos de forma segura e eficiente, sem a necessidade de configurar e gerenciar complexos buckets de S3 ou serviços similares. A integração via SDK, como visto na nossa rota <code>/api/upload</code>, abstrai toda a complexidade.</p>
    `,
  },
  {
    slug: 'segundo-artigo',
    title: 'Guia de Segurança para Tokens de API',
    content: `
      <p>Tokens de API, como o <code>BLOB_READ_WRITE_TOKEN</code>, são chaves secretas que concedem acesso a recursos. É fundamental nunca expô-los no lado do cliente (código que roda no navegador).</p>
      <p>A abordagem correta, implementada neste projeto, é manter o token como uma variável de ambiente no servidor e criar um endpoint de API (<code>/api/upload</code>) que atua como um intermediário seguro. O cliente envia o arquivo para a nossa API, e é o nosso servidor que, de posse do token, se comunica com o serviço do Vercel Blob.</p>
    `,
  },
];

// Esta função busca o post específico com base no slug da URL.
function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  // Se o post não for encontrado, exibe a página 404 do Next.js.
  if (!post) {
    notFound();
  }

  return (
    <article>
      <Link href="/blog">← Voltar para o Blog</Link>
      <h1 style={{ marginTop: '1rem' }}>{post.title}</h1>
      {/* Usamos dangerouslySetInnerHTML para renderizar o HTML do conteúdo. Cuidado ao usar com conteúdo de fontes não confiáveis. */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}