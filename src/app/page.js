"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shirt, Droplets, Wind, ShieldCheck, MapPin, Clock, Phone } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-outfit font-bold text-sky-700">
            FENARA<span className="text-amber-500 font-medium">LAUNDRY</span>
          </div>
          <a href="#kontak" className="hidden md:inline-block px-6 py-2 bg-sky-100 text-sky-700 font-medium rounded-full hover:bg-sky-200 transition-colors">
            Hubungi Kami
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold border border-amber-200">
              #1 Laundry Rumahan di Sumobito
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-slate-800 leading-tight">
              Cucian Harian Menumpuk? <span className="text-sky-600">Biar Tetangga Anda yang Urus!</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 md:pr-10">
              Nikmati waktu bersantai di rumah. Kami memastikan pakaian Anda bersih cemerlang, wangi khas rumah yang menenangkan, dan terlipat rapi.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#kontak" className="px-8 py-4 bg-sky-600 text-white rounded-full font-medium shadow-lg shadow-sky-600/30 hover:bg-sky-700 transition-all hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                <Phone size={20} />
                Pesan Antar-Jemput
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/assets/images/home_hero.png" 
                alt="Keranjang pakaian bersih di rumah" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800">Garansi Bersih</p>
                <p className="text-sm text-slate-500">100% Cuci Ulang</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interest/Features Section */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-slate-800 mb-4">Sentuhan Personal Layaknya Pakaian Sendiri</h2>
            <p className="text-slate-600">FENARA LAUNDRY hadir sebagai solusi laundry rumahan yang peduli. Kami tidak mencampur cucian Anda dengan pelanggan lain.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="col-span-full grid md:grid-cols-3 gap-8"
            >
              {[
                { icon: Shirt, title: "Dicuci Terpisah", desc: "Setiap nota dicuci di mesin yang berbeda. Tidak ada risiko tertukar atau luntur dari pakaian orang lain." },
                { icon: Droplets, title: "Air Mengalir & Bersih", desc: "Menggunakan air bersih yang selalu mengalir dan deterjen premium yang ramah untuk serat kain." },
                { icon: Wind, title: "Wangi Khas Rumah", desc: "Pewangi lembut yang menenangkan, membuat Anda merasa nyaman mengenakan pakaian Anda seharian." }
              ].map((feature, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-outfit text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desire/Quality Section */}
      <section className="py-20 bg-sky-50 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 md:order-1 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/assets/images/home_wash.png" 
              alt="Sentuhan personal saat melipat pakaian" 
              fill 
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 md:order-2 space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-outfit font-bold text-slate-800 leading-tight">
              Kualitas Jempolan dari Tangan Tetangga Sendiri
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600">
              Bayangkan membuka lemari dan disambut dengan tumpukan pakaian yang rapi, lembut, dan harum wangi. Itulah yang kami hadirkan untuk Anda setiap harinya.
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-4 pt-4">
              {[
                "Penyetrikaan presisi anti kusut",
                "Lipatan rapi standar butik",
                "Pengepakan plastik higienis"
              ].map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={14} />
                  </div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Action / CTA Section */}
      <section id="kontak" className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-sky-600 rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 relative z-10">Bebaskan Hari Anda dari Cucian</h2>
            <p className="text-sky-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Jangan biarkan cucian merusak waktu istirahat Anda. Pesan sekarang, kami siap antar-jemput cucian Anda secara gratis untuk area Sumobito!
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6281234567890?text=Halo%20FENARA%20LAUNDRY,%20saya%20ingin%20pesan%20layanan%20antar-jemput." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow relative z-10"
            >
              <Phone size={24} />
              Pesan via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          <div>
            <div className="text-2xl font-outfit font-bold text-white mb-4">
              FENARA<span className="text-amber-500">LAUNDRY</span>
            </div>
            <p className="text-slate-400">Laundry rumahan pilihan keluarga di Sumobito. Bersih, wangi, rapi, dan sepenuh hati.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-sky-400 flex-shrink-0" />
                <span>Sumobito, Jombang, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-sky-400 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-sky-400 flex-shrink-0" />
                <span>Buka: 07:00 - 20:00 (Setiap Hari)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Galeri Kami</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative h-20 rounded-lg overflow-hidden">
                <Image src="/assets/images/home_hero.png" alt="Gallery" fill className="object-cover" />
              </div>
              <div className="relative h-20 rounded-lg overflow-hidden">
                <Image src="/assets/images/home_quality.png" alt="Gallery" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} FENARA LAUNDRY. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
