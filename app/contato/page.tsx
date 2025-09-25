'use client';

import { useState } from 'react';

// A linha 'export const metadata' foi removida daqui para corrigir o erro.

export default function Contato() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [url, setUrl] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) return;

    setStatus('Enviando...');
    setUrl('');

    const fd = new FormData();
    fd.append('file', file);

    const res = await fetch('/api/upload', { method: 'POST', body: fd });
    const data = await res.json().catch(() => ({}));

    if (res.ok) {
      setUrl(data.url);
      setStatus('Upload concluído ✅');
    } else {
      setStatus(`Erro: ${data.error || res.statusText}`);
    }
  }

  return (
    <main>
      <h1>Contato</h1>
      <p>Envie um arquivo de teste para o Vercel Blob.</p>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <button type="submit" disabled={!file}>Enviar</button>
      </form>
      {status && <p>{status}</p>}
      {url && (
        <p>
          Arquivo disponível em:{' '}
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
      )}
    </main>
  );
}