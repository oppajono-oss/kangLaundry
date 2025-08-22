'use client';

import { motion } from 'framer-motion';
import { Truck, Zap, Shirt, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Truck,
    title: "Gratis Jemput–Antar 3 km",
    description: "Jadwal fleksibel, kurir ramah, update sederhana via WA.",
    details: ["Pilih jam jemput sesuai kebutuhan", "Kurir berpengalaman dan ramah", "Update status real-time via WhatsApp", "Gratis untuk radius 3 km"]
  },
  {
    icon: Zap,
    title: "Express 6–12 jam",
    description: "Prioritas cuci & pengeringan untuk kebutuhan mendesak.",
    details: ["Proses prioritas tanpa antri", "Mesin cuci khusus express", "Pengeringan cepat dengan teknologi modern", "Ideal untuk kebutuhan mendadak"]
  },
  {
    icon: Shirt,
    title: "Perlakuan Bahan",
    description: "Pisah warna, detergen ramah kulit, softener premium opsional.",
    details: ["Pemisahan berdasarkan jenis dan warna", "Detergen hypoallergenic", "Pilihan softener premium", "Perawatan khusus untuk bahan sensitif"]
  },
  {
    icon: RefreshCw,
    title: "Jaminan Kepuasan",
    description: "Ulang-cuci gratis 2×24 jam bila hasil kurang memuaskan.",
    details: ["Garansi hasil cuci terbaik", "Ulang cuci gratis dalam 2x24 jam", "Tidak ada biaya tambahan", "Komitmen pada kepuasan pelanggan"]
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
            Layanan Unggulan Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Setiap detail dirancang untuk memberikan pengalaman laundry terbaik dengan standar profesional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <feature.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-xl text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border border-green-200"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-poppins font-bold text-xl text-slate-900">
              Keamanan Terjamin
            </h3>
          </div>
          <p className="text-lg text-slate-700">
            🔒 Setiap order diberi tag & dicatat, memastikan tidak tertukar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}