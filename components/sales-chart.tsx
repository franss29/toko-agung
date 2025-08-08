"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
  TooltipItem,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: TooltipItem<"line">) => {
          let label = context.dataset.label || ""
          if (label) label += ": "
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
        callback: (value: number | string) =>
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(Number(value)),
      },
    },
  },
}

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
]

const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Pendapatan",
      data: [400000, 450000, 600000, 550000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1100000],
      borderColor: "rgb(99, 102, 241)",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      tension: 0.4,
    },
  ],
}

export function LineChart() {
  return <Line options={options} data={data} />
}
