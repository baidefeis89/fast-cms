import data from './pages.json';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  const slug = request.nextUrl.searchParams.get('slug');

  const pageData = data.pages.find((page) => page.slug === slug);

  return NextResponse.json(pageData);
}
