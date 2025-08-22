'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: ''
  });

  const whatsappUrl = "https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20laundry.%20Bisa%20jemput%20hari%20ini%3F";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo KangLaundry, saya ${formData.name}. Saya butuh layanan ${formData.service}. WhatsApp saya: ${formData.whatsapp}. Tolong hubungi saya ya!`;
    const url = `https://wa.me/628978898454?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
              Butuh penawaran cepat?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Isi form singkat ini dan tim kami akan menghubungi Anda dalam 5-10 menit
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-slate-50 border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium text-slate-700 mb-2 block">
                      Nama Anda
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 text-base"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp" className="text-base font-medium text-slate-700 mb-2 block">
                      Nomor WhatsApp
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="h-12 text-base"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-base font-medium text-slate-700 mb-2 block">
                      Kebutuhan Laundry
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Pilih jenis layanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kiloan">Kiloan Reguler</SelectItem>
                        <SelectItem value="express">Express (6-12 jam)</SelectItem>
                        <SelectItem value="satuan">Premium Satuan</SelectItem>
                        <SelectItem value="lainnya">Lainnya (konsultasi dulu)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Kirim & Dihubungi
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Alternative CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl text-white">
                <h3 className="font-poppins font-bold text-2xl mb-4">
                  Lebih Suka Chat Langsung?
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Hubungi kami via WhatsApp dan dapatkan respon cepat dalam 5-10 menit
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-6">
                  <div className="text-yellow-300 text-4xl mb-2">💬</div>
                  <p className="text-white font-semibold">CS Online</p>
                  <p className="text-blue-200">08.00 - 21.00 WIB</p>
                </div>

                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  Chat Langsung WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}