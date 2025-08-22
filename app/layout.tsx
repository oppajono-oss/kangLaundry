import './globals.css';
import { BackToTopButton } from '@/components/ui/BackToTopButton';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kanglaundry.vercel.app'),
  title: {
    default: 'KangLaundry - Laundry Express Purwokerto',
    template: '%s | KangLaundry'
  },
  description: 'Laundry kiloan/satuan express di Purwokerto. Antar-jemput gratis radius 3 km, selesai 24–48 jam (express 6–12 jam), garansi ulang-cuci 2×24 jam.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={cn(
        inter.variable, 
        poppins.variable,
        "font-inter antialiased bg-slate-50 text-slate-900"
      )}>
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}