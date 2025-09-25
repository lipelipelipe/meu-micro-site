import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Node para suportar uploads maiores

function sanitize(name: string) {
  return name.replace(/[^a-z0-9.\-_]/gi, '_').toLowerCase();
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'Envie um arquivo no campo "file".' }, { status: 400 });
    }

    // Regras simples (ajuste como quiser)
    const MAX_MB = 10;
    if (file.size > MAX_MB * 1024 * 1024) {
      return NextResponse.json({ error: `Arquivo muito grande. Máx ${MAX_MB}MB.` }, { status: 413 });
    }

    const allowed = ['image/png', 'image/jpeg', 'image/webp', 'application/pdf'];
    if (file.type && !allowed.includes(file.type)) {
      return NextResponse.json({ error: `Tipo não permitido: ${file.type}` }, { status: 415 });
    }

    const key = `uploads/${Date.now()}-${sanitize(file.name)}`;

    const blob = await put(key, file, {
      access: 'public', // use 'private' se quiser acesso restrito
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: file.type || 'application/octet-stream',
    });

    return NextResponse.json({
      url: blob.url,
      pathname: blob.pathname,
      size: file.size,
      contentType: file.type,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Falha no upload.' }, { status: 500 });
  }
}