'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Zap, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const packages = [
  {
    name: "Hemat (Kiloan)",
    price: "Rp 8.000",
    unit: "/kg",
    icon: Clock,
    description: "Cocok cuci rutin. Estimasi 24–48 jam. Gratis jemput–antar 3 km.",
    features: [
      "Cuci bersih dengan detergen berkualitas",
      "Pemisahan berdasarkan jenis kain",
      "Gratis antar-jemput radius 3 km",
      "Estimasi selesai 24-48 jam",
      "Garansi ulang cuci 2x24 jam"
    ],
    color: "bg-green-50 border-green-200",
    buttonColor: "bg-green-600 hover:bg-green-700"
  },
  {
    name: "Express",
    price: "+50%",
    unit: "dari harga kiloan",
    icon: Zap,
    description: "Prioritas, selesai 6–12 jam (S&K berlaku).",
    features: [
      "Semua benefit paket Hemat",
      "Proses prioritas tanpa antri",
      "Selesai dalam 6-12 jam",
      "Pengeringan cepat",
      "Update progress real-time"
    ],
    color: "bg-blue-50 border-blue-200",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    popular: true
  },
  {
    name: "Premium Care (Satuan)",
    price: "Mulai",
    unit: "Rp 7.000/pcs",
    icon: Crown,
    description: "Perawatan premium untuk pakaian khusus",
    features: [
      "Kemeja Rp 7.000/pcs",
      "Celana Rp 8.000/pcs", 
      "Jas Rp 25.000/pcs",
      "Gaun Rp 30.000/pcs",
      "Bed Cover Rp 25.000/pcs",
      "Seprai Rp 10.000/pcs"
    ],
    color: "bg-purple-50 border-purple-200",
    buttonColor: "bg-purple-600 hover:bg-purple-700"
  }
];

export default function PricingSection() {
  const whatsappUrl = "https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20tanya%20harga%20dan%20paket%20laundry.";

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
            Paket Harga Transparan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Tidak ada biaya tersembunyi!
          </p>
          
          {/* Promo Badge */}
          <Badge className="bg-yellow-400 text-yellow-900 px-6 py-2 text-lg font-semibold">
            🎉 Diskon Rp 10.000 pelanggan baru (s.d. 30 Sep 2025)
          </Badge>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    Paling Populer
                  </Badge>
                </div>
              )}

              <Card className={`p-8 h-full ${pkg.color} hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pkg.icon className="w-8 h-8 text-slate-700" />
                  </div>

                  {/* Package Info */}
                  <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="font-bold text-3xl text-slate-900">{pkg.price}</span>
                    <span className="text-slate-600 ml-1">{pkg.unit}</span>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${pkg.buttonColor} text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    Pilih Paket Ini
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-slate-50 p-8 rounded-3xl"
        >
          <p className="text-lg text-slate-600 mb-4">
            Butuh konsultasi untuk memilih paket yang tepat?
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-6 text-lg"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Konsultasi Gratis via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}