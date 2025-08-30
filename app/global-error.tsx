'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center py-24 px-6 text-center">
          <div className="max-w-md">
            <h1 className="font-bold text-3xl mb-4 text-blue-700">Oops! Terjadi Kesalahan Sistem</h1>
            <p className="mb-8 text-slate-600">
              Mohon maaf, terjadi kesalahan pada sistem kami. Tim teknis sudah diberitahu dan sedang memperbaikinya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => reset()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Coba Lagi
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}