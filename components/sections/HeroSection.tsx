'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20laundry.%20Bisa%20jemput%20hari%20ini%3F";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Z-Pattern */}
          <motion.div variants={itemVariants} className="text-white">
            {/* Hero Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Clock className="w-4 h-4 mr-1" />
                Selesai 24–48 jam
              </Badge>
              <Badge variant="secondary" className="bg-yellow-400/90 text-blue-900 border-yellow-300">
                <Truck className="w-4 h-4 mr-1" />
                Express 6–12 jam
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Gratis Jemput–Antar 3 km
              </Badge>
            </div>

            <h1 className="font-poppins font-bold text-4xl lg:text-5xl leading-tight mb-6">
              Cara pakaian bersih, wangi, dan rapi setiap hari tanpa buang waktu cuci–setrika
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              KangLaundry bantu keluarga, pekerja, dan mahasiswa di Purwokerto dengan laundry kiloan, satuan, dan express—praktis, higienis, dan terjangkab, supaya kamu bisa fokus ke hal yang lebih penting.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Chat via WhatsApp (Respon cepat)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Paket & Harga
              </Button>
            </div>

            {/* Trust Mini-Row */}
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="ml-2">4,8/5</span>
              </div>
              <span>1.200+ pelanggan</span>
              <span>Buka 7 hari</span>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pelanggan pria tersenyum di outlet laundry KangLaundry"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
                📍 Melayani area Purwokerto
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm">
                Jemput–antar gratis 3 km
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}