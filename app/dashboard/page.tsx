"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ShoppingCart, TrendingUp } from "lucide-react"
import { SalesChart } from "@/components/sales-chart"
import { TopProductsTable } from "@/components/top-products-table"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight text-[#2D2D2D]">Dashboard Toko Agung</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Produk</CardTitle>
            <Package className="w-4 h-4 text-[#00C559]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D2D2D]">248</div>
            <p className="text-xs text-muted-foreground">+12 produk baru bulan ini</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Transaksi Hari Ini</CardTitle>
            <ShoppingCart className="w-4 h-4 text-[#00C559]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D2D2D]">42</div>
            <p className="text-xs text-muted-foreground">+15% dari kemarin</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Omset Hari Ini</CardTitle>
            <TrendingUp className="w-4 h-4 text-[#00C559]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D2D2D]">Rp 2.850.000</div>
            <p className="text-xs text-muted-foreground">+18% dari kemarin</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">Mingguan</TabsTrigger>
          <TabsTrigger value="monthly">Bulanan</TabsTrigger>
        </TabsList>
        <TabsContent value="weekly" className="space-y-4">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#2D2D2D]">Grafik Penjualan Mingguan</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <SalesChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="space-y-4">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#2D2D2D]">Grafik Penjualan Bulanan</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <SalesChart monthly />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#2D2D2D]">Produk Terlaris</CardTitle>
        </CardHeader>
        <CardContent>
          <TopProductsTable />
        </CardContent>
      </Card>
    </div>
  )
}
