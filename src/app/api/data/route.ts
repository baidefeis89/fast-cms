import data from './pages.json';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  const pageData = data.pages.find((page) => page.slug === slug);

  return new Response(JSON.stringify(pageData));
}
