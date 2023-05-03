import data from './pages.json';
import { NextApiRequest } from 'next';

export async function GET(request: NextApiRequest) {
  const url = new URL(request.url || '');
  const slug = url.searchParams.get('slug');

  const pageData = data.pages.find((page) => page.slug === slug);

  return new Response(JSON.stringify(pageData));
}
