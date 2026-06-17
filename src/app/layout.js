import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "FENARA LAUNDRY | Laundry Rumahan Tepercaya di Sumobito",
  description: "Laundry rumahan yang merawat pakaian Anda layaknya pakaian kami sendiri. Bersih, wangi, rapi, dan antar-jemput gratis di Sumobito Jombang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
