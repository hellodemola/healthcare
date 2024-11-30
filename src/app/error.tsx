'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import Button from './components/common/button';
import { Label, SubLabel } from './components/common/typography';

export default function Error({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error({ error });
  }, [error]);

  return (
    <div className="max-w-40">
      <Label>Something went wrong!</Label>
      <SubLabel>{error?.message}</SubLabel>

      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
