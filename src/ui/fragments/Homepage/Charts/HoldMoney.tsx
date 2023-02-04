import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import seedColor from 'seed-color'

export type ChartsData = { date: Date, holdMoney: number }[]

const formatDataForChart = (input: ChartsData) => {
  return input.map(day => {
    const chartDay: { name: string, holdMoney: number } = {
      name: Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        // year: 'numeric'
      }).format(day.date),
      holdMoney: day.holdMoney
    }

    return chartDay
  })
}

export default function HoldTransactionsChart(props: { data: ChartsData }) {
  const data = formatDataForChart(props.data)

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
        <Bar 
          dataKey={'holdMoney'}
          name={'Средства на холде'}
          stackId='a' 
          fill={seedColor('holdMoney').toHex()}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}