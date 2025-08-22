'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const faqs = [
  {
    question: "Berapa lama prosesnya?",
    answer: "Paket reguler selesai dalam 24–48 jam. Untuk paket Express, kami bisa menyelesaikan dalam 6–12 jam tergantung jumlah dan jenis pakaian."
  },
  {
    question: "Gratis antar–jemput?",
    answer: "Ya, gratis untuk radius 3 km dari lokasi kami. Untuk di luar radius tersebut, ada biaya transport kecil yang akan dijelaskan saat pemesanan."
  },
  {
    question: "Bisa pilih pewangi?",
    answer: "Tentu! Kami menyediakan beberapa pilihan softener dengan aroma yang berbeda. Anda bisa request aroma favorit saat pemesanan."
  },
  {
    question: "Kalau hasil kurang memuaskan?",
    answer: "Kami berikan garansi ulang-cuci gratis dalam 2×24 jam jika Anda merasa hasil kurang memuaskan. Tidak ada biaya tambahan sama sekali."
  },
  {
    question: "Bayar pakai apa?",
    answer: "Kami terima transfer bank (BCA/BRI/Mandiri/BNI) dan semua e-wallet populer seperti GoPay, OVO, DANA, dan ShopeePay untuk kemudahan Anda."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <Card className="overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <h3 className="font-poppins font-semibold text-lg text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Punya pertanyaan lain? Jangan ragu untuk bertanya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20tanya%20tentang%20layanan%20laundry.", '_blank')}
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              💬 Chat WhatsApp
            </button>
            <button
              onClick={() => window.open("tel:+628978898454", '_self')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              📞 Telepon Langsung
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}