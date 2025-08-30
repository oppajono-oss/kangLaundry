'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20laundry.%20Bisa%20jemput%20hari%20ini%3F";

  return (
    <>
      {/* Desktop - Bottom Right */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="hidden md:block fixed bottom-6 right-6 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
        >
          <MessageCircle className="w-8 h-8" />
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile - Sticky Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg flex items-center justify-center gap-3 text-lg transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          Chat WhatsApp Sekarang
        </motion.button>
      </div>

      {/* Mobile - Add bottom padding to prevent content overlap */}
      <div className="md:hidden h-20"></div>
    </>
  );
}