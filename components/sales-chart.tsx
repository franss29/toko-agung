"use client"

import { useRef } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js"

// Registrasi komponen Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Data dummy untuk grafik penjualan mingguan
const weeklyData: ChartData<"line"> = {
  labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
  datasets: [
    {
      label: "Penjualan",
      data: [650000, 590000, 800000, 810000, 960000, 1050000, 750000],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.3,
      fill: true,
    },
  ],
}

// Data dummy untuk grafik penjualan bulanan
const monthlyData: ChartData<"line"> = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Penjualan",
      data: [
        450000, 520000, 580000, 620000, 590000, 650000, 700000, 680000, 720000, 750000, 800000, 820000, 780000, 760000,
        800000, 850000, 900000, 950000, 920000, 880000, 850000, 900000, 950000, 1000000, 1050000, 1100000, 1050000,
        980000, 920000, 950000,
      ],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.3,
      fill: true,
    },
  ],
}

// Opsi chart
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          let label = context.dataset.label || ""
          if (label) {
            label += ": "
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(context.parsed.y)
          }
          return label
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: any) =>
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(value),
      },
    },
  },
}

interface SalesChartProps {
  monthly?: boolean
}

export function SalesChart({ monthly = false }: SalesChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={chartRef} className="h-[300px] w-full">
      <Line data={monthly ? monthlyData : weeklyData} options={options} />
    </div>
  )
}
