import Link from 'next/link';
import { posts } from '@/lib/posts'; // ATUALIZADO: Importando os posts

export default function BlogPage() {
  // ... (o resto do componente permanece o mesmo)
  return (
    <section>
      <h1>Nosso Blog</h1>
      <p>Artigos sobre tecnologia, desenvolvimento e segurança.</p>

      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`} style={{ fontSize: '1.5rem' }}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>Ler mais →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}