"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, Printer, Save, Search, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Data dummy untuk pencarian produk
const availableProducts = [
  { id: 1, name: "Buku Tulis 58 Lembar", price: 4500, stock: 150 },
  { id: 2, name: "Pulpen Standard Biru", price: 2000, stock: 300 },
  { id: 3, name: "Pensil 2B Faber Castell", price: 3500, stock: 200 },
  { id: 4, name: "Penggaris 30cm", price: 5000, stock: 85 },
  { id: 5, name: "Spidol Whiteboard Hitam", price: 8500, stock: 75 },
  { id: 6, name: "Kertas HVS A4 70gsm", price: 45000, stock: 40 },
  { id: 7, name: "Map Plastik L", price: 3000, stock: 120 },
  { id: 8, name: "Stapler Kenko HD-10", price: 25000, stock: 35 },
  { id: 9, name: "Tempat Pensil Karakter", price: 15000, stock: 60 },
  { id: 10, name: "Kalkulator Casio", price: 85000, stock: 25 },
]

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  total: number
}

export default function TransaksiPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [showResults, setShowResults] = useState(false)

  // Filter produk berdasarkan pencarian
  const searchResults = availableProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Tambah produk ke keranjang
  const addToCart = (product: (typeof availableProducts)[0]) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price,
              }
            : item,
        ),
      )
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          total: product.price,
        },
      ])
    }

    setSearchTerm("")
    setShowResults(false)
  }

  // Ubah jumlah produk di keranjang
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              total: newQuantity * item.price,
            }
          : item,
      ),
    )
  }

  // Hapus produk dari keranjang
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  // Hitung total belanja
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.total, 0)
  }

  // Reset keranjang
  const resetCart = () => {
    setCart([])
  }

  // Simpan transaksi
  const saveTransaction = () => {
    alert("Transaksi berhasil disimpan!")
    resetCart()
  }

  // Cetak struk
  const printReceipt = () => {
    alert("Mencetak struk...")
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Transaksi Penjualan</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Keranjang Belanja</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Cari barang atau scan barcode..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setShowResults(e.target.value.length > 0)
                  }}
                  onFocus={() => {
                    if (searchTerm.length > 0) setShowResults(true)
                  }}
                />
                {showResults && searchTerm && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md border shadow-lg max-h-60 overflow-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map((product) => (
                        <div
                          key={product.id}
                          className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                          onClick={() => addToCart(product)}
                        >
                          <span>{product.name}</span>
                          <Badge variant="outline">Rp {product.price.toLocaleString()}</Badge>
                        </div>
                      ))
                    ) : (
                      <div className="p-2 text-center text-muted-foreground">Barang tidak ditemukan</div>
                    )}
                  </div>
                )}
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Barang</TableHead>
                      <TableHead className="text-right">Harga</TableHead>
                      <TableHead className="text-center">Jumlah</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cart.length > 0 ? (
                      cart.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell className="text-right">Rp {item.price.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center justify-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">Rp {item.total.toLocaleString()}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="h-24 text-center">
                          Belum ada barang di keranjang
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Ringkasan Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>Rp {calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Diskon</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rp {calculateTotal().toLocaleString()}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                className="w-full bg-[#00C559] hover:bg-[#00A047]"
                disabled={cart.length === 0}
                onClick={saveTransaction}
              >
                <Save className="mr-2 h-4 w-4" /> Simpan Penjualan
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                disabled={cart.length === 0}
                onClick={printReceipt}
              >
                <Printer className="mr-2 h-4 w-4" /> Cetak Struk
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
