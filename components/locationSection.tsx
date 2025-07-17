"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

export function LocationSection() {
  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Jl.+Sudirman+No.123+Jakarta", "_blank")
  }

  return (
    <section id="location" className="py-20 bg-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-4">Lokasi & Jam Operasional</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kunjungi toko kami yang berlokasi strategis dan mudah dijangkau. Kami buka setiap hari untuk melayani
            kebutuhan printing Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl overflow-hidden bg-white">
              <div className="h-80 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJl.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi CopyCenter"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <Button onClick={openGoogleMaps} className="w-full bg-[#1E90FF] hover:bg-[#003366]">
                  <Navigation className="mr-2 h-4 w-4" />
                  Buka di Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E90FF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#1E90FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-2">Alamat Lengkap</h3>
                      <p className="text-gray-600">
                        Jl. Sudirman No. 123, Blok A<br />
                        Kelurahan Senayan, Kecamatan Kebayoran Baru
                        <br />
                        Jakarta Selatan 12190
                      </p>
                      <p className="text-sm text-[#1E90FF] mt-2">
                        📍 Dekat Kampus UI, Universitas Bina Nusantara, dan area perkantoran Sudirman
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#003366]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-2">Jam Operasional</h3>
                      <div className="space-y-1 text-gray-600">
                        <div className="flex justify-between">
                          <span>Senin - Jumat:</span>
                          <span className="font-medium">08:00 - 22:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sabtu:</span>
                          <span className="font-medium">08:00 - 21:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Minggu:</span>
                          <span className="font-medium">09:00 - 20:00</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#1E90FF] mt-2">✅ Buka setiap hari, termasuk hari libur nasional</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E90FF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#1E90FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-2">Kontak</h3>
                      <div className="space-y-1 text-gray-600">
                        <div>
                          <span className="text-sm">WhatsApp:</span>
                          <span className="font-medium ml-2">0812-3456-7890</span>
                        </div>
                        <div>
                          <span className="text-sm">Telepon:</span>
                          <span className="font-medium ml-2">(021) 1234-5678</span>
                        </div>
                        <div>
                          <span className="text-sm">Email:</span>
                          <span className="font-medium ml-2">info@copycenter.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Info */}
            <Card className="border-none shadow-lg bg-[#1E90FF]/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#003366] mb-4">🚗 Akses Transportasi</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>
                    • <strong>TransJakarta:</strong> Halte Dukuh Atas (5 menit jalan kaki)
                  </div>
                  <div>
                    • <strong>MRT:</strong> Stasiun Dukuh Atas BNI (7 menit jalan kaki)
                  </div>
                  <div>
                    • <strong>Parkir:</strong> Tersedia parkir motor dan mobil gratis
                  </div>
                  <div>
                    • <strong>Ojek Online:</strong> Mudah dijangkau dengan Gojek/Grab
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
