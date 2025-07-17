"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Data dummy untuk produk terlaris
const topProducts = [
  {
    id: 1,
    name: "Buku Tulis 58 Lembar",
    category: "Buku & Kertas",
    sold: 180,
    revenue: 810000,
    trend: "up",
  },
  {
    id: 2,
    name: "Pulpen Standard Biru",
    category: "Alat Tulis",
    sold: 145,
    revenue: 290000,
    trend: "up",
  },
  {
    id: 3,
    name: "Kertas HVS A4 70gsm",
    category: "Buku & Kertas",
    sold: 65,
    revenue: 2925000,
    trend: "up",
  },
  {
    id: 4,
    name: "Pensil 2B Faber Castell",
    category: "Alat Tulis",
    sold: 98,
    revenue: 343000,
    trend: "down",
  },
  {
    id: 5,
    name: "Tempat Pensil Karakter",
    category: "Aksesoris",
    sold: 52,
    revenue: 780000,
    trend: "up",
  },
]

export function TopProductsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead className="text-right">Terjual</TableHead>
            <TableHead className="text-right">Pendapatan</TableHead>
            <TableHead className="text-center">Tren</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <Badge variant="outline">{product.category}</Badge>
              </TableCell>
              <TableCell className="text-right">{product.sold}</TableCell>
              <TableCell className="text-right">Rp {product.revenue.toLocaleString()}</TableCell>
              <TableCell className="text-center">
                <Badge variant={product.trend === "up" ? "default" : "destructive"}>
                  {product.trend === "up" ? "↑" : "↓"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
