import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import seedColor from 'seed-color'

export type ChartsData = { date: Date, holdTransactions: number }[]
export default function HoldTransactionsChart(props: { data: ChartsData }) {
  const data = props.data

  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          interval={0}
          dataKey='holdTransactions'
        />
        <YAxis 
          width={100}
        />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey={'holdTransactions'}
          name={'Транзакции на холде'}
          stackId='a' 
          fill={seedColor('holdTransactions').toHex()}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}