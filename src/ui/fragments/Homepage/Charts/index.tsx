import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
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
  }
]

export default function HomepageCharts() {
  const [data, setData] = React.useState(mockData)

  const formatData = (input: { date: Date, sources: { id: string, amt: number }[] }[]) => {
    return input.map(day => ({
      name: Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(day.date),
      ...Object.fromEntries(
        day.sources.map(source => [
          `source_${source.id}`,
          source.amt
        ])
      )
    }))
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
          <Bar dataKey={`source_${source.id}`} stackId='a' fill="#8884d8" key={i} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}