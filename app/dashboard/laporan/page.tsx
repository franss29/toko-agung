"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, FileSpreadsheet, FileText } from "lucide-react"
import { format } from "date-fns"
import { id } from "date-fns/locale"

// Data dummy untuk laporan penjualan
const salesData = [
  {
    id: "INV-001",
    date: "2023-05-01",
    items: 5,
    total: 75000,
    payment: "Tunai",
  },
  {
    id: "INV-002",
    date: "2023-05-01",
    items: 3,
    total: 45000,
    payment: "Tunai",
  },
  {
    id: "INV-003",
    date: "2023-05-02",
    items: 7,
    total: 120000,
    payment: "Transfer",
  },
  {
    id: "INV-004",
    date: "2023-05-03",
    items: 2,
    total: 30000,
    payment: "Tunai",
  },
  {
    id: "INV-005",
    date: "2023-05-03",
    items: 4,
    total: 65000,
    payment: "Transfer",
  },
  {
    id: "INV-006",
    date: "2023-05-04",
    items: 6,
    total: 95000,
    payment: "Tunai",
  },
  {
    id: "INV-007",
    date: "2023-05-05",
    items: 3,
    total: 50000,
    payment: "Transfer",
  },
]

export default function LaporanPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Format tanggal untuk tampilan
  const formattedDate = date ? format(date, "PPP", { locale: id }) : ""

  // Filter data berdasarkan tanggal
  const filteredData = date
    ? salesData.filter((sale) => {
        const saleDate = new Date(sale.date)
        return (
          saleDate.getDate() === date.getDate() &&
          saleDate.getMonth() === date.getMonth() &&
          saleDate.getFullYear() === date.getFullYear()
        )
      })
    : salesData

  // Hitung total penjualan
  const totalSales = filteredData.reduce((sum, sale) => sum + sale.total, 0)

  // Hitung total transaksi
  const totalTransactions = filteredData.length

  // Export ke PDF
  const exportToPDF = () => {
    alert("Mengekspor laporan ke PDF...")
  }

  // Export ke Excel
  const exportToExcel = () => {
    alert("Mengekspor laporan ke Excel...")
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Laporan Penjualan</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={exportToPDF}>
            <FileText className="mr-2 h-4 w-4" /> PDF
          </Button>
          <Button variant="outline" onClick={exportToExcel}>
            <FileSpreadsheet className="mr-2 h-4 w-4" /> Excel
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Filter Tanggal</CardTitle>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? formattedDate : "Pilih tanggal"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Transaksi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTransactions}</div>
            <p className="text-xs text-muted-foreground">Pada {formattedDate}</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Penjualan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp {totalSales.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Pada {formattedDate}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Daftar Transaksi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No. Faktur</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead className="text-center">Jumlah Item</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead>Pembayaran</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.id}</TableCell>
                      <TableCell>{format(new Date(sale.date), "dd MMMM yyyy", { locale: id })}</TableCell>
                      <TableCell className="text-center">{sale.items}</TableCell>
                      <TableCell className="text-right">Rp {sale.total.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{sale.payment}</Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      Tidak ada transaksi pada tanggal ini
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
