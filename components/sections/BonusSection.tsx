'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Gift } from 'lucide-react';
import { Card } from '@/components/ui/card';

const bonuses = [
  {
    icon: Shield,
    title: "Garansi ulang-cuci 2×24 jam",
    description: "bila kurang wangi/bersih.",
    color: "text-green-600"
  },
  {
    icon: FileText,
    title: "Panduan perawatan kain gratis",
    description: "(PDF via WA).",
    color: "text-blue-600"
  },
  {
    icon: Gift,
    title: "Voucher Rp5.000",
    description: "untuk order berikutnya.",
    color: "text-purple-600"
  }
];

export default function BonusSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-6">
            Bonus Eksklusif untuk Anda
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Lebih dari sekedar laundry, kami berikan nilai tambah untuk kepuasan Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6`}>
                  <bonus.icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-white mb-3">
                  {bonus.title}
                </h3>
                
                <p className="text-blue-100 text-lg">
                  {bonus.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20"
        >
          <h3 className="font-poppins font-bold text-2xl text-white mb-4">
            🛡️ Risk Reversal Guarantee
          </h3>
          <p className="text-xl text-blue-100">
            Jika Anda tidak 100% puas dengan hasil cuci kami, kami akan mengulang prosesnya GRATIS tanpa pertanyaan apapun
          </p>
        </motion.div>
      </div>
    </section>
  );
}