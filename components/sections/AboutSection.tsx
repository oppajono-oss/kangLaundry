'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const trustBadges = [
  { icon: Users, text: "1.200+ Pelanggan", color: "text-blue-600" },
  { icon: Shield, text: "Rating 4.8/5", color: "text-yellow-600" },
  { icon: Clock, text: "Garansi 2×24 jam", color: "text-green-600" }
];

const paymentMethods = [
  { name: 'BCA', color: 'bg-blue-600' },
  { name: 'BRI', color: 'bg-blue-700' },
  { name: 'Mandiri', color: 'bg-yellow-600' },
  { name: 'BNI', color: 'bg-orange-600' },
  { name: 'GoPay', color: 'bg-green-600' },
  { name: 'OVO', color: 'bg-purple-600' },
  { name: 'DANA', color: 'bg-blue-500' },
  { name: 'ShopeePay', color: 'bg-orange-500' }
];

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
                Tentang KangLaundry
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                KangLaundry hadir untuk bantu warga Purwokerto punya pakaian bersih & rapi tanpa repot. Tim berpengalaman, ramah, dan menjaga standar kebersihan tinggi untuk memberikan hasil terbaik bagi setiap pelanggan.
              </p>

              {/* Operational Hours */}
              <Card className="p-6 bg-slate-50 border border-slate-200 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-slate-900 mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-slate-600">Senin–Minggu, 08.00–21.00 WIB</p>
                    <p className="text-sm text-green-600 font-medium">Respon cepat ±5–10 menit</p>
                  </div>
                </div>
              </Card>

              {/* Service Area */}
              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  Area Layanan Kami
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Purwokerto Barat', 'Purwokerto Timur', 'Purwokerto Utara', 'Purwokerto Selatan', 'Sokaraja', 'Kembaran'].map((area, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* NAP Consistency */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl">
                <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2">
                  KangLaundry • Purwokerto • WA 628978898454
                </h3>
                <p className="text-slate-600">
                  Solusi laundry terpercaya untuk keluarga modern
                </p>
              </div>
            </motion.div>

            {/* Trust & Payment */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Trust Badges */}
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-200">
                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-6 text-center">
                  Dipercaya Ribuan Keluarga
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${badge.color.replace('text-', 'bg-').replace('600', '100')}`}>
                        <badge.icon className={`w-6 h-6 ${badge.color}`} />
                      </div>
                      <span className="font-semibold text-slate-900">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Payment Methods */}
              <Card className="p-8 bg-white border border-slate-200">
                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-6 text-center">
                  Metode Pembayaran
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className={`${method.color} text-white p-3 rounded-lg text-center font-semibold text-sm`}>
                      {method.name}
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-slate-500 mt-4">
                  Pembayaran aman dan terpercaya
                </p>
              </Card>

              {/* Maps Integration */}
              <div className="text-center space-y-4">
                <h3 className="font-poppins font-semibold text-lg text-slate-900">
                  📍 Temukan Lokasi Kami
                </h3>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=KangLaundry", '_blank')}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Buka Peta
                  </button>
                  <button
                    onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=KangLaundry", '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Dapatkan Rute
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}