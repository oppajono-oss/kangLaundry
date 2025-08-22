import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import PricingSection from '@/components/sections/PricingSection';
import BonusSection from '@/components/sections/BonusSection';
import GallerySection from '@/components/sections/GallerySection';
import LeadFormSection from '@/components/sections/LeadFormSection';
import FAQSection from '@/components/sections/FAQSection';
import AboutSection from '@/components/sections/AboutSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import StructuredData from '@/components/SEO/StructuredData';

export const metadata: Metadata = {
  title: 'Laundry Purwokerto – KangLaundry (Antar-Jemput, Express)',
  description: 'Laundry kiloan/satuan express di Purwokerto. Antar-jemput gratis radius 3 km, selesai 24–48 jam (express 6–12 jam), garansi ulang-cuci 2×24 jam. Chat WhatsApp sekarang.',
  keywords: 'laundry Purwokerto, laundry terdekat Purwokerto, laundry express Purwokerto, cuci kiloan Purwokerto',
  openGraph: {
    title: 'KangLaundry - Laundry Express Purwokerto',
    description: 'Antar-jemput gratis, selesai 24-48 jam, garansi ulang-cuci',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="relative">
        <HeroSection />
        <SocialProofSection />
        <BenefitsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <BonusSection />
        <GallerySection />
        <LeadFormSection />
        <FAQSection />
        <AboutSection />
        <FinalCTASection />
        <WhatsAppButton />
      </main>
    </>
  );
}