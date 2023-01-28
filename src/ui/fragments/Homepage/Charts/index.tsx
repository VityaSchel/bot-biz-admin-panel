import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import seedColor from 'seed-color'

const mockData: ChartsData = [
  {
    date: new Date('2023-01-22'),
    sources: [
      {
        id: 'vk',
        amt: 130501
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 130501
      },
    ]
  },
  {
    date: new Date('2023-01-23'),
    sources: [
      {
        id: 'vk',
        amt: 130501
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 130501
      },
    ]
  },
  {
    date: new Date('2023-01-24'),
    sources: [
      {
        id: 'vk',
        amt: 130501
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 130501
      },
    ]
  },
  {
    date: new Date('2023-01-25'),
    sources: [
      {
        id: 'vk',
        amt: 130501
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 130501
      },
    ]
  },
  {
    date: new Date('2023-01-26'),
    sources: [
      {
        id: 'vk',
        amt: 130501
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 130501
      },
    ]
  },
  {
    date: new Date('2023-01-27'),
    sources: [
      {
        id: 'vk',
        amt: 130501
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 130501
      },
    ]
  },
  {
    date: new Date('2023-01-28'),
    sources: [
      {
        id: 'vk',
        amt: 130501
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 130501
      },
    ]
  },
]

type ChartsData = { date: Date, sources: { id: string, amt: number }[] }[]

export default function HomepageCharts() {
  const [data, setData] = React.useState(mockData)

  const formatData = (input: ChartsData) => {
    return input.map(day => {
      const chartDay: { name: string, [key: `source_${string}`]: number } = {
        name: Intl.DateTimeFormat('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).format(day.date)
      }

      for (const source of day.sources) {
        chartDay[`source_${source.id}`] = source.amt
      }

      return chartDay
    })
  }
  
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
    <ResponsiveContainer width={500} height={500}>
      <BarChart
        width={500}
        height={300}
        data={formatData(data)}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
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