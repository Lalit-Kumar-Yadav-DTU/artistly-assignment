'use client';
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import ArtistsContent from './ArtistsContent';

export default function ArtistsPage() {  // This is a client component
  // This page is wrapped in a Suspense boundary to handle loading states
  return (
    <Suspense fallback={<div>Loading artists...</div>}>
      <ArtistsContent />
    </Suspense>
  );
}
