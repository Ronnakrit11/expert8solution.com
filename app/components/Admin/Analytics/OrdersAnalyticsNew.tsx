'use client'

import { useGetOrdersAnalyticsQuery } from '@/redux/features/analytics/analyticsApi'

import React, { useEffect, useState } from 'react'

import Chart from 'chart.js'

interface OrdersAnalyticsNewProps {
  isDashboard: boolean
}

const OrdersAnalyticsNew: React.FC<OrdersAnalyticsNewProps> = ({ isDashboard }) => {
  const { data, isLoading } = useGetOrdersAnalyticsQuery({})
  const [dataChart, setDataChart] = useState<any>([])
  const [analyticsData, setAnalyticsData] = useState<any>([])
  const [nameChart, setNameChart] = useState<any>([])

  useEffect(() => {
    if (data && data.orders.last12Months) {
      const newData = data.orders.last12Months.map((item: any) => {
        return { name: item.month, count: item.count }
      })
      setAnalyticsData(newData)

      const names = newData.map((item: any) => item.name)
      setNameChart(names)

      const counts = newData.map((item: any) => item.count)
      setDataChart(counts)
    }
  }, [data])
  console.log({ name: nameChart, data: dataChart })

  useEffect(() => {
    let config = {
      type: 'bar',
      data: {
        labels: nameChart,
        datasets: [
          {
            label: String(new Date().getFullYear()),
            backgroundColor: '#4a5568',
            borderColor: '#4a5568',
            data: dataChart,
            fill: false,
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Orders Chart',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            display: false,
            title: {
              display: true,
              text: 'Month',
            },
            grid: {
              display: true,
              borderColor: 'rgba(33, 37, 41, 0.3)',
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
            },
          },
          y: {
            display: true,
            title: {
              display: false,
              text: 'Value',
            },
            grid: {
              display: true,
              borderColor: 'rgba(33, 37, 41, 0.2)',
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.2)',
              drawBorder: false,
            },
          },
        },
      },
    }
    let ctx: any = document.getElementById('bar-chart')
    if (ctx) {
      new Chart(ctx, config)
    }
  }, [dataChart, nameChart])

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && dataChart.length === 0 && <p>No data available</p>}
      {!isLoading && dataChart.length > 0 && (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-black mb-1 text-xs font-semibold">orders</h6>
                <h2 className="text-black text-xl font-semibold">Order Analysics</h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            <div className="relative h-96">
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OrdersAnalyticsNew
