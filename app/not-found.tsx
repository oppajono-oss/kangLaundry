import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24 px-6 text-center">
      <div className="max-w-md">
        <h1 className="font-poppins font-bold text-4xl mb-2 text-blue-700">404</h1>
        <h2 className="font-poppins font-bold text-2xl mb-4 text-blue-700">Halaman Tidak Ditemukan</h2>
        <p className="mb-8 text-slate-600">
          Mohon maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            <Link href="/">
              Kembali ke Beranda
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-200 text-blue-700"
          >
            <Link href="#hero">
              Lihat Layanan Kami
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}