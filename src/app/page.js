"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Shirt, Droplets, Wind, ShieldCheck, MapPin, 
  Clock, Phone, Star, CheckCircle2, ArrowRight,
  Sparkles, Truck, PackageCheck
} from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden">
      
      {/* 1. NAVBAR (Glassmorphism) */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-outfit font-extrabold tracking-tight text-slate-900">
            FENARA<span className="text-indigo-600 font-medium">LAUNDRY</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            <a href="#layanan" className="hover:text-indigo-600 transition-colors">Layanan</a>
            <a href="#cara-kerja" className="hover:text-indigo-600 transition-colors">Cara Kerja</a>
            <a href="#testimoni" className="hover:text-indigo-600 transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
            <a href="#kontak" className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-600/25">
              Pesan Sekarang
            </a>
          </nav>
        </div>
      </motion.header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-[120px] opacity-60 -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] opacity-60 -z-10"></div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Hero Text */}
            <motion.div 
              initial="hidden" animate="visible" variants={stagger}
              className="lg:col-span-6 space-y-8 relative z-10"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 shadow-sm">
                <Sparkles size={16} className="text-amber-500" />
                <span className="text-sm font-semibold text-indigo-900">Laundry Rumahan Premium Sumobito</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-outfit font-bold text-slate-900 leading-[1.1] tracking-tight">
                Kembalikan <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Waktu Luang</span> Anda.
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                Lelah dengan tumpukan cucian? Serahkan pada tetangga tepercaya Anda. Kami merawat setiap helai pakaian Anda dengan sentuhan personal, bersih cemerlang, dan wangi khas rumah yang menenangkan.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 pt-4">
                <a href="#kontak" className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-indigo-600 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-indigo-600/30">
                  Ambil Cucian Saya
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700 z-10 relative">
                        <Star size={14} className="fill-amber-400 text-amber-400"/>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-slate-600">
                    <span className="text-slate-900 font-bold block">500+</span> 
                    Keluarga Percaya Kami
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.1)]">
                <Image 
                  src="/assets/images/home_hero.png" 
                  alt="Keranjang pakaian bersih di rumah" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-12 lg:-left-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Selesai 24 Jam</p>
                  <p className="text-sm text-slate-500">Layanan Kilat Tersedia</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM & AGITATION (Dark Section) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-outfit font-bold leading-tight">
              Mencuci Seharusnya <span className="text-indigo-400">Bukan Beban.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Akhir pekan Anda terlalu berharga untuk dihabiskan di depan mesin cuci dan papan setrika. Biarkan tenaga profesional kami yang mengurusnya, sementara Anda menciptakan momen berharga bersama keluarga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. LAYANAN (Glassmorphism Cards) */}
      <section id="layanan" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-indigo-600 font-bold tracking-wider uppercase text-sm"
            >
              Layanan Kami
            </motion.span>
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mt-4 mb-6"
            >
              Solusi Untuk Segala Kebutuhan Pakaian Anda
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "Cuci Komplit (Reguler)", desc: "Pencucian mendalam, pengeringan higienis, dan setrika rapi. Pakaian kembali seperti baru siap pakai." },
              { icon: Wind, title: "Setrika Saja", desc: "Anda yang mencuci, kami yang menyetrika dengan pelicin premium agar rapi sempurna tanpa kusut." },
              { icon: PackageCheck, title: "Cuci Bedcover & Selimut", desc: "Perawatan khusus untuk kain tebal dengan mesin berkapasitas besar untuk mematikan tungau dan bakteri." }
            ].map((srv, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <srv.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4 relative z-10">{srv.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARA KERJA (How it Works) */}
      <section id="cara-kerja" className="py-24 bg-slate-50 px-6 border-y border-slate-200/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-[3rem] overflow-hidden"
            >
              <Image src="/assets/images/home_wash.png" alt="Proses lipat baju" fill className="object-cover" />
            </motion.div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-outfit font-bold text-slate-900 mb-4">Cara Kerja Semudah Menjentikkan Jari</h2>
                <p className="text-lg text-slate-600">Cukup rebahan di rumah, dan biarkan sistem antar-jemput kami yang bekerja untuk Anda.</p>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {[
                  { icon: Phone, title: "1. Hubungi Kami", desc: "Kirim pesan via WA. Beritahu lokasi dan estimasi berat cucian Anda." },
                  { icon: Truck, title: "2. Kami Jemput", desc: "Kurir kami akan datang ke rumah Anda menjemput cucian tepat waktu." },
                  { icon: Sparkles, title: "3. Dicuci & Diantar", desc: "Cucian diproses higienis dan diantar kembali ke rumah dalam keadaan bersih, wangi, dan rapi." }
                ].map((step, idx) => (
                  <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-indigo-100 text-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <step.icon size={24} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <h3 className="font-bold text-slate-900 text-xl mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section id="testimoni" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">Apa Kata Tetangga Anda?</h2>
            <p className="text-lg text-slate-600">Ratusan keluarga di Sumobito telah mempercayakan cuciannya pada kami.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ibu Siti", text: "Wanginya awet banget! Baju suami yang biasanya bau keringat susah hilang, dicuci di sini langsung fresh. Lipatannya juga super rapi." },
              { name: "Mas Budi", text: "Sangat membantu buat saya yang kerja kantoran. Kurirnya ramah, jemputnya on time. Pulang kerja tinggal masukin baju ke lemari." },
              { name: "Mbak Rina", text: "Awalnya ragu nyuci bedcover karena tebal, tapi hasilnya memuaskan. Empuk dan wangi. Harganya juga sangat bersahabat untuk kualitas sepremium ini." }
            ].map((testi, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{testi.text}"</p>
                <div className="font-bold text-slate-900">{testi.name}</div>
                <div className="text-sm text-slate-500">Pelanggan Setia</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 bg-slate-50 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-10 text-center">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            {[
              { q: "Apakah pakaian saya akan dicampur dengan milik orang lain?", a: "TIDAK. Kami menjamin 100% setiap nota/keranjang dicuci di mesin yang berbeda untuk menjaga kebersihan dan mencegah baju tertukar/luntur." },
              { q: "Bagaimana jika pakaian saya tidak bersih?", a: "Kami memiliki Garansi Cuci Ulang 100% tanpa biaya tambahan jika Anda menemukan noda yang masih bisa dihilangkan namun terlewat oleh kami." },
              { q: "Apakah ada biaya tambahan untuk antar-jemput?", a: "Gratis biaya antar-jemput untuk area Sumobito dengan minimal cucian tertentu. Silakan hubungi admin kami untuk detailnya." }
            ].map((faq, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-indigo-600" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION (Massive Gradient) */}
      <section id="kontak" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-indigo-500 rounded-full blur-[150px] opacity-20"></div>
              <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-sky-500 rounded-full blur-[150px] opacity-20"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-6">Siap Merasakan Bedanya?</h2>
              <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
                Jangan biarkan cucian kotor menumpuk. Pesan sekarang dan nikmati layanan antar-jemput dari pintu ke pintu.
              </p>
              <a 
                href="https://wa.me/6281234567890?text=Halo%20FENARA%20LAUNDRY,%20saya%20ingin%20pesan%20layanan%20antar-jemput." 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95"
              >
                <Phone size={24} className="text-indigo-600" />
                Pesan via WhatsApp Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-outfit font-extrabold text-slate-900 mb-4">
              FENARA<span className="text-indigo-600">LAUNDRY</span>
            </div>
            <p className="text-slate-500 max-w-sm">Laundry rumahan premium di Sumobito. Solusi cerdas untuk kebersihan pakaian keluarga Anda.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Kontak Cepat</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-indigo-600 shrink-0" />
                <span>Jl. Raya Sumobito, Jombang, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-indigo-600 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-indigo-600 shrink-0" />
                <span>07:00 - 20:00 (Buka Setiap Hari)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Layanan</h4>
            <ul className="space-y-3 text-slate-600">
              <li>Cuci Komplit (Reguler/Kilat)</li>
              <li>Setrika Saja</li>
              <li>Cuci Bedcover & Sprei</li>
              <li>Antar Jemput Gratis</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl border-t border-slate-100 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} FENARA LAUNDRY. All rights reserved. Built with Next.js & Tailwind.
        </div>
      </footer>
    </main>
  );
}
