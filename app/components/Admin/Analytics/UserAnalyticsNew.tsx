'use client'

// Importing from 'chart.js/auto' for Chart.js version 3.x
import { useGetUsersAnalyticsQuery } from '@/redux/features/analytics/analyticsApi'

import React, { useEffect, useState } from 'react'

import Chart from 'chart.js'

interface UserAnalyticsNewProps {
  isDashboard: boolean
}

const UserAnalyticsNew: React.FC<UserAnalyticsNewProps> = ({ isDashboard }) => {
  const { data, isLoading } = useGetUsersAnalyticsQuery({})
  const [nameChart, setNameChart] = useState<any>([])
  const [dataChart, setDataChart] = useState<any>([])
  const [analyticsData, setAnalyticsData] = useState<any>([])

  useEffect(() => {
    if (data && data.users.last12Months) {
      const newData = data.users.last12Months.map((item: any) => {
        return { name: item.month, count: item.count }
      })
      setAnalyticsData(newData)

      const names = newData.map((item: any) => item.name)
      setNameChart(names)

      const counts = newData.map((item: any) => item.count)
      setDataChart(counts)
    }
  }, [data])

  useEffect(() => {
    if (dataChart.length > 0 && nameChart.length > 0) {
      const config = {
        type: 'line',
        data: {
          labels: nameChart,
          datasets: [
            {
              label: String(new Date().getFullYear()),
              backgroundColor: '#3182ce',
              borderColor: '#3182ce',
              data: dataChart,
              fill: false,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            title: {
              display: false,
              text: 'Sales Charts',
              color: 'white',
            },
            legend: {
              display: true,
              labels: {
                color: 'white',
              },
              align: 'end',
              position: 'bottom',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              ticks: {
                color: 'rgba(255,255,255,.7)',
              },
              title: {
                display: false,
                text: 'Month',
                color: 'black',
              },
              grid: {
                display: false,
                color: 'rgba(33, 37, 41, 0.3)',
              },
            },
            y: {
              ticks: {
                color: 'rgba(255,255,255,.7)',
              },
              title: {
                display: false,
                text: 'Value',
                color: 'black',
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.15)',
              },
            },
          },
        },
      }

      const ctx = document.getElementById('line-chart') as HTMLCanvasElement | null
      if (ctx) {
        const myChart = new Chart(ctx, config)
      }
    }
  }, [dataChart, nameChart])

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        {isLoading && <p>Loading...</p>}
        {!isLoading && dataChart.length === 0 && <p>No data available</p>}
        {!isLoading && dataChart.length > 0 && (
          <div className="bg-white shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent ">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-black mb-1 text-xs font-semibold">users</h6>
                  <h2 className="text-black  text-xl font-semibold">Users Analysics</h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              <div className="relative h-96 ">
                <canvas id="line-chart"></canvas>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default UserAnalyticsNew
