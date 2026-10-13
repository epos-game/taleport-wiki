import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

import { rawParam } from '../../lib/help';

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getCollection('docs');

  return entries.map((entry) => {
    const [locale, ...rest] = entry.id.split('/');

    return {
      params: { path: rawParam(locale, rest.join('/')) },
      props: { body: entry.body ?? '' },
    };
  });
};

export const GET: APIRoute = ({ props }) =>
  new Response(props.body as string, {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
