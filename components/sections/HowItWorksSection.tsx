'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Droplets, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Pesan Pick-up",
    description: "Chat WA, pilih jam jemput & alamat.",
    details: "Tim CS kami akan konfirmasi jadwal dan alamat penjemputan yang sesuai dengan kebutuhan Anda"
  },
  {
    number: "2", 
    icon: Droplets,
    title: "Cuci & Perawatan",
    description: "Diproses sesuai jenis kain + standar higienis.",
    details: "Pakaian dicuci dengan standar profesional, dipisah berdasarkan jenis dan warna untuk hasil optimal"
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Antar Kembali",
    description: "Selesai sesuai paket (Reguler/Express), siap pakai.",
    details: "Pakaian bersih, wangi, dan rapi diantarkan tepat waktu ke alamat Anda"
  }
];

export default function HowItWorksSection() {
  const whatsappUrl = "https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20laundry.%20Bisa%20jemput%20hari%20ini%3F";

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
            Cara Kerja Sederhana
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hanya 3 langkah mudah untuk mendapatkan pakaian bersih dan rapi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="p-8 h-full bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 text-lg mb-4 font-medium">
                  {step.description}
                </p>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.details}
                </p>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-slate-300"></div>
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-slate-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Mulai Konsultasi via WA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}