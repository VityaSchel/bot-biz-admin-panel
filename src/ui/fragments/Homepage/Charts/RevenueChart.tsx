import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import seedColor from 'seed-color'

export type ChartsData = { date: Date, sources: { id: string, amt: number }[] }[]

const formatDataForChart = (input: ChartsData) => {
  return input.map(day => {
    const chartDay: { name: string, [key: `source_${string}`]: number } = {
      name: Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        // year: 'numeric'
      }).format(day.date)
    }

    for (const source of day.sources) {
      chartDay[`source_${source.id}`] = source.amt
    }

    return chartDay
  })
}

export default function RevenueChart(props: { data: ChartsData }) {
  const data = formatDataForChart(props.data)
  
  const sources = [
    {
      name: 'VK module',
      id: 'vk'
    }, 
    {
      name: 'Telegram module',
      id: 'tg'
    },
    {
      name: 'Lovebot',
      id: 'lovebot'
    },
  ]

  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          interval={0}
          dataKey='name'
        />
        <YAxis 
          width={100}
          tickFormatter={(value: number) => value.toLocaleString('ru-RU') + ' ₽'} 
        />
        <Tooltip 
          formatter={(value: number) => value.toLocaleString('ru-RU') + ' ₽'}
        />
        <Legend />
        {sources.map((source, i) => (
          <Bar 
            key={`source_${source.id}`}
            dataKey={`source_${source.id}`}
            name={source.name}
            stackId='a' 
            fill={seedColor(source.id).toHex()}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}