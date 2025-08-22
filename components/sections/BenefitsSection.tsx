'use client';

import { motion } from 'framer-motion';
import { Clock, Truck, Shield, DollarSign, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: Clock,
    title: "Proses cepat 24–48 jam",
    description: "jadi kamu bisa hemat waktu tiap pekan",
    color: "text-blue-600"
  },
  {
    icon: Truck,
    title: "Antar–jemput gratis 3 km",
    description: "jadi kamu bisa tetap produktif di rumah/kantor",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "Standar higienis & wangi tahan lama",
    description: "jadi kamu bisa lebih percaya diri",
    color: "text-purple-600"
  },
  {
    icon: DollarSign,
    title: "Harga transparan & struk digital",
    description: "jadi kamu bisa atur budget tanpa kejutan",
    color: "text-yellow-600"
  },
  {
    icon: MessageCircle,
    title: "CS ramah via WA",
    description: "jadi kamu bisa tanya kapan pun",
    color: "text-blue-600"
  }
];

export default function BenefitsSection() {
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
            Kenapa KangLaundry pilihan tepat?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Lebih dari sekedar mencuci pakaian, kami memberikan solusi lengkap untuk gaya hidup modern Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white/90 backdrop-blur-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.color.replace('text-', 'bg-').replace('600', '100')} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  
                  <h3 className="font-poppins font-bold text-xl text-slate-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Loss Aversion Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-3xl"
        >
          <p className="text-xl lg:text-2xl font-semibold">
            💭 Setiap minggu tanpa KangLaundry = jam berharga terbuang untuk cuci–setrika.
          </p>
        </motion.div>
      </div>
    </section>
  );
}