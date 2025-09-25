import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meu Micro Site',
  description: 'Demonstração de upload com Vercel Blob e Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ddd', marginBottom: '2rem', backgroundColor: '#fafafa' }}>
          <nav style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
            <Link href="/">Página Inicial</Link>
            {/* NOVO LINK ADICIONADO ABAIXO */}
            <Link href="/blog">Blog</Link>
            <Link href="/contato">Contato (Upload)</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}