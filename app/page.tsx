import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h1>Bem-vindo ao Meu Micro Site</h1>
      <p>
        Este é um projeto de demonstração que integra o Vercel Blob para upload de arquivos
        de forma segura em uma aplicação Next.js.
      </p>
      <p>
        Navegue até a página de{' '}
        <Link href="/contato">Contato</Link> para testar a funcionalidade de upload.
      </p>
    </section>
  );
}