"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    src: "interiror-toko.jpg",
    alt: "Interior toko CopyCenter yang modern dan nyaman",
    title: "Interior Toko",
    description: "Ruang tunggu yang nyaman dengan AC dan WiFi gratis",
  },
  {
    src: "peralatan-modern.jpg",
    alt: "Mesin fotocopy dan printer canggih",
    title: "Peralatan Modern",
    description: "Mesin fotocopy dan printer terbaru untuk hasil berkualitas",
  },
  {
    src: "layanan-jilid.jpg",
    alt: "Proses jilid dokumen yang rapi",
    title: "Layanan Jilid",
    description: "Proses jilid spiral dan lakban dengan hasil yang rapi",
  },
  {
    src: "pelayan-toko.jpg",
    alt: "Staff yang ramah melayani pelanggan",
    title: "Pelayanan Ramah",
    description: "Staff berpengalaman siap membantu kebutuhan Anda",
  },
  {
    src: "hasil-berkualitas.jpg",
    alt: "Hasil print foto dan dokumen berkualitas",
    title: "Hasil Berkualitas",
    description: "Contoh hasil print foto dan dokumen dengan kualitas HD",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    alt: "Area parkir yang luas dan aman",
    title: "Parkir Luas",
    description: "Area parkir motor dan mobil yang luas dan aman",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => setSelectedImage(index)
  const closeModal = () => setSelectedImage(null)
  const nextImage = () =>
    selectedImage !== null && setSelectedImage((selectedImage + 1) % galleryImages.length)
  const prevImage = () =>
    selectedImage !== null &&
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Galeri Foto Toko</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat suasana toko, peralatan modern, dan kualitas layanan kami melalui galeri foto berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">{galleryImages[selectedImage].description}</p>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <Button
                  variant="outline"
                  onClick={prevImage}
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
                >
                  ← Sebelumnya
                </Button>
                <Button
                  variant="outline"
                  onClick={nextImage}
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
                >
                  Selanjutnya →
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fasilitas Lengkap untuk Kenyamanan Anda</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏢", title: "Ruang Tunggu AC", desc: "Nyaman menunggu dengan AC dan kursi empuk" },
              { icon: "📶", title: "WiFi Gratis", desc: "Internet cepat untuk download file" },
              { icon: "🚗", title: "Parkir Luas", desc: "Area parkir motor dan mobil gratis" },
              { icon: "⚡", title: "Layanan Cepat", desc: "Proses cepat dengan antrian terorganisir" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
