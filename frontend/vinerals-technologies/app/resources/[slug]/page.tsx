'use client';

import { redirect } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ResourcePage({ }: PageProps) {
  // Redirect all resource slugs to the main resources page
  redirect('/resources');
}
