'use client'
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import ArtistsContent from './ArtistsContent';

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading artists...</div>}>
      <ArtistsContent />
    </Suspense>
  );
}
