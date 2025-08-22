'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Users } from 'lucide-react';

export default function FinalCTASection() {
  const whatsappUrl = "https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20laundry.%20Bisa%20jemput%20hari%20ini%3F";

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white mb-6">
            Mulai hari ini, pakaian bersih & wangi tanpa drama
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
            Slot jemput terbatas setiap hari — booking sekarang
          </p>

          {/* Urgency Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <p className="text-white font-semibold">Tersisa Hari Ini</p>
              <p className="text-yellow-300 text-2xl font-bold">5 Slot</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <p className="text-white font-semibold">Sudah Bergabung</p>
              <p className="text-yellow-300 text-2xl font-bold">1.200+</p>
            </div>
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-12 py-8 text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Chat via WhatsApp (Respon cepat)
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-12 py-8 text-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Paket & Harga
            </Button>
          </div>

          {/* Final Value Props */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl mb-3">⚡</div>
              <p className="text-white font-semibold">Express 6-12 Jam</p>
              <p className="text-blue-200 text-sm">Siap saat dibutuhkan</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl mb-3">🚚</div>
              <p className="text-white font-semibold">Antar-Jemput Gratis</p>
              <p className="text-blue-200 text-sm">Radius 3 km</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl mb-3">🛡️</div>
              <p className="text-white font-semibold">Garansi 2×24 Jam</p>
              <p className="text-blue-200 text-sm">Ulang cuci gratis</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"
      ></motion.div>
    </section>
  );
}