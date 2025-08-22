'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    name: "Bu Rina",
    location: "Karangklesem",
    text: "Sejak pakai KangLaundry, baju anak selalu rapi. Jemputnya cepat!",
    rating: 5
  },
  {
    name: "Dimas",
    location: "Purwokerto Timur", 
    text: "Express 6 jam beneran kelar. Pas buat kerja shift.",
    rating: 5
  },
  {
    name: "Novi",
    location: "Sokaraja",
    text: "Harga jelas, gaada biaya aneh. Repeat order!",
    rating: 5
  }
];

const paymentMethods = [
  { name: 'WhatsApp', logo: '💬' },
  { name: 'Google Maps', logo: '📍' },
  { name: 'BCA', logo: '🏦' },
  { name: 'BRI', logo: '🏦' },
  { name: 'Mandiri', logo: '🏦' },
  { name: 'GoPay', logo: '💳' },
  { name: 'OVO', logo: '💳' },
  { name: 'DANA', logo: '💳' },
];

export default function SocialProofSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Payment Methods */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-600">
              <span className="text-2xl">{method.logo}</span>
              <span className="font-medium">{method.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
            Apa kata pelanggan kami?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Lebih dari 1.200+ keluarga telah mempercayakan laundry mereka kepada kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-blue-600 opacity-60" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <Badge variant="secondary" className="mt-1">
                      {testimonial.location}
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}