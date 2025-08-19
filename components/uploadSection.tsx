"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, MessageCircle, Phone } from "lucide-react"

export function UploadSection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    copies: "",
    notes: "",
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the file upload and form submission
    alert("Pesanan Anda telah diterima! Kami akan menghubungi Anda segera.")
  }

  const sendToWhatsApp = () => {
    const message = `Halo, saya ingin memesan layanan printing:
    
Nama: ${formData.name}
Layanan: ${formData.service}
Jumlah: ${formData.copies}
Catatan: ${formData.notes}

Saya akan mengirim file melalui WhatsApp ini.`

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="upload" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-4">Upload File untuk Dicetak</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kirim file Anda secara online dan kami akan menyiapkan pesanan Anda. Atau hubungi langsung via WhatsApp
            untuk kemudahan lebih.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Upload Form */}
          <Card className="border-none shadow-xl bg-white">
            <CardHeader className="bg-[#003366] text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Form Upload File
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor HP</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="08xx-xxxx-xxxx"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Jenis Layanan</Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih layanan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="print-bw">Print Hitam Putih</SelectItem>
                      <SelectItem value="print-color">Print Warna</SelectItem>
                      <SelectItem value="fotocopy-bw">Fotocopy Hitam Putih</SelectItem>
                      <SelectItem value="fotocopy-color">Fotocopy Warna</SelectItem>
                      <SelectItem value="jilid-spiral">Print + Jilid Spiral</SelectItem>
                      <SelectItem value="jilid-lakban">Print + Jilid Lakban</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="copies">Jumlah Eksemplar</Label>
                  <Input
                    id="copies"
                    type="number"
                    value={formData.copies}
                    onChange={(e) => handleInputChange("copies", e.target.value)}
                    placeholder="Berapa eksemplar?"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="file">Upload File</Label>
                  <div className="mt-2">
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png"
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F2F2F2] file:text-[#003366] hover:file:bg-[#1E90FF]/10"
                    />
                    {selectedFile && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                        <FileText className="h-4 w-4" />
                        {selectedFile.name}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Format yang didukung: PDF, Word, Excel, PowerPoint, JPG, PNG (Max: 10MB)
                  </p>
                </div>

                <div>
                  <Label htmlFor="notes">Catatan Khusus</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Instruksi khusus, ukuran kertas, dll."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#1E90FF] hover:bg-[#003366]">
                  <Upload className="mr-2 h-4 w-4" />
                  Kirim Pesanan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* WhatsApp Alternative */}
          <div className="space-y-8">
            <Card className="border-none shadow-xl bg-green-50">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Kirim via WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Lebih mudah kirim file langsung via WhatsApp? Klik tombol di bawah dan kirim file Anda beserta
                    detail pesanan.
                  </p>

                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-[#003366] mb-2">Cara Order via WhatsApp:</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Klik tombol WhatsApp di bawah</li>
                      <li>2. Kirim file yang ingin dicetak</li>
                      <li>3. Sebutkan jenis layanan dan jumlah</li>
                      <li>4. Kami akan konfirmasi harga dan waktu</li>
                    </ol>
                  </div>

                  <Button onClick={sendToWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat WhatsApp Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#003366] mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#1E90FF]" />
                  Kontak Langsung
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">WhatsApp:</span>
                    <span className="font-medium">0812-3456-7890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Telepon:</span>
                    <span className="font-medium">(021) 1234-5678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">info@tokoagung.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-[#F2F2F2] rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-[#003366] mb-2">💡 Tips Order Online:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pastikan file dalam format yang didukung</li>
                <li>• Sebutkan ukuran kertas yang diinginkan</li>
                <li>• Untuk file besar, kompres terlebih dahulu</li>
                <li>• Konfirmasi alamat pengambilan jika delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
