import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold">CopyCenter</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi printing terpercaya sejak 2015. Melayani fotocopy, print, scan, dan jilid dengan kualitas terbaik
              dan harga terjangkau.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layanan Kami</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Fotocopy B/W & Warna
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Print Dokumen
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Scan Dokumen
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Jilid Spiral & Lakban
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Cetak Foto
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Desain Grafis
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu Cepat</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Daftar Harga
                </Link>
              </li>
              <li>
                <Link href="#upload" className="hover:text-white transition-colors">
                  Upload File
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Jl. Sudirman No. 123
                  <br />
                  Jakarta Selatan 12190
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@copycenter.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Sen-Jum: 08:00-22:00</div>
                  <div>Sabtu: 08:00-21:00</div>
                  <div>Minggu: 09:00-20:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 CopyCenter. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
