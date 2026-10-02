import type { APIRoute } from 'astro';
import { buildManifest } from '../../lib/help';

export const GET: APIRoute = async () => {
  const manifest = await buildManifest();

  return new Response(`${JSON.stringify(manifest, null, 2)}\n`, {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
