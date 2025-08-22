'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const galleryItems = [
  {
    title: "Hasil cuci satuan premium—detail kerapian kerah & lengan",
    image: "/images/Hasil cuci satuan premium.png",
    category: "Before/After"
  },
  {
    title: "Fasilitas cuci modern dan higienis", 
    image: "/images/Fasilitas cuci modern.png",
    category: "Fasilitas"
  },
  {
    title: "Proses sorting dan packing yang rapi",
    image: "/images/Proses sorting.png",
    category: "Proses"
  },
  {
    title: "Hasil lipatan dan setrika profesional",
    image: "/images/Hasil lipatan.png",
    category: "Hasil"
  },
  {
    title: "Mesin cuci dan pengering modern",
    image: "/images/Mesin cuci.png",
    category: "Fasilitas" 
  },
  {
    title: "Tim laundry profesional dan berpengalaman",
    image: "/images/Tim laundry.png",
    category: "Tim"
  }
];

export default function GallerySection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
            Lihat Kualitas Kerja Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Setiap detail dikerjakan dengan standar profesional untuk kepuasan maksimal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-poppins font-semibold text-lg text-slate-900 leading-relaxed">
                    {item.title}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border border-green-200"
        >
          <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
            ✨ Standar Kualitas Tinggi
          </h3>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Setiap pakaian melalui quality control ketat sebelum dikembalikan kepada Anda. Kepuasan Anda adalah prioritas utama kami.
          </p>
        </motion.div>
      </div>
    </section>
  );
}