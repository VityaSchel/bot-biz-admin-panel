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
        amt: 137128
      },
      {
        id: 'lovebot',
        amt: 138057
      },
    ]
  },
  {
    date: new Date('2023-01-23'),
    sources: [
      {
        id: 'vk',
        amt: 125622
      },
      {
        id: 'tg',
        amt: 138092
      },
      {
        id: 'lovebot',
        amt: 121952
      },
    ]
  },
  {
    date: new Date('2023-01-24'),
    sources: [
      {
        id: 'vk',
        amt: 127102
      },
      {
        id: 'tg',
        amt: 132154
      },
      {
        id: 'lovebot',
        amt: 126875
      },
    ]
  },
  {
    date: new Date('2023-01-25'),
    sources: [
      {
        id: 'vk',
        amt: 134294
      },
      {
        id: 'tg',
        amt: 134908
      },
      {
        id: 'lovebot',
        amt: 125893
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
        amt: 127461
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
        amt: 129182
      },
      {
        id: 'tg',
        amt: 130501
      },
      {
        id: 'lovebot',
        amt: 126717
      },
    ]
  },
  {
    date: new Date('2023-01-28'),
    sources: [
      {
        id: 'vk',
        amt: 116778
      },
      {
        id: 'tg',
        amt: 140501
      },
      {
        id: 'lovebot',
        amt: 150001
      },
    ]
  },
]

type ChartsData = { date: Date, sources: { id: string, amt: number }[] }[]

const formatDataForChart = (input: ChartsData) => {
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

export default function HomepageCharts() {
  const [data, setData] = React.useState(formatDataForChart(mockData))
  
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
        data={data}
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
        <Tooltip 
          formatter={(value: number) => {
            return value.toLocaleString('ru-RU') + ' ₽'
          }}
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