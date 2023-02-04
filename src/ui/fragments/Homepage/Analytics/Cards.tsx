import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

import RevenueChart from '../Charts/RevenueChart'
import type { ChartsData as RevenueChartsData } from '../Charts/RevenueChart'
import HoldTransactionsChart from '../Charts/HoldTransactions'
import type { ChartsData as HoldTransactionsChartsData } from '../Charts/HoldTransactions'

const revenueMockData: RevenueChartsData = [
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
export function Revenue() {
  const [revenue, setRevenue] = React.useState<string>('117,491 ₽')
  const [revenueDates, setRevenueDates] = React.useState<RevenueChartsData>(revenueMockData)

  return (
    <Card sx={{ minWidth: 275, flex: 1 }}>
      <CardContent>
        <Typography variant='h5' color="text.primary" gutterBottom>
          Доход сервиса
        </Typography>

        <Typography sx={{ mt: 1.5 }} variant="h2" color="text.primary" gutterBottom>
          {revenue}
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: 14 }} color="text.secondary" gutterBottom>
          Денежные средства, которые мы выручили
        </Typography>
        <RevenueChart data={revenueDates} />
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  )
}

export function Turnover() {
  const [turnover, setTurnover] = React.useState<string>('2,971,505 ₽')
  const [turnoverDates, setTurnoverDates] = React.useState<RevenueChartsData>(revenueMockData)

  return (
    <Card sx={{ minWidth: 275, flex: 1 }}>
      <CardContent>
        <Typography variant='h5' color="text.primary" gutterBottom>
          Оборот сервиса
        </Typography>

        <Typography sx={{ mt: 1.5 }} variant="h2" color="text.primary" gutterBottom>
          {turnover}
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: 14 }} color="text.secondary" gutterBottom>
          Денежные средства, которые у нас есть, вместе с hold-транзакциями
        </Typography>
        <RevenueChart data={turnoverDates} />
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  )
}

const mockHoldTransactions: HoldTransactionsChartsData = [
  {
    date: new Date('2023-01-22'),
    holdTransactions: 540
  },
  {
    date: new Date('2023-01-23'),
    holdTransactions: 493
  },
  {
    date: new Date('2023-01-24'),
    holdTransactions: 381
  },
  {
    date: new Date('2023-01-25'),
    holdTransactions: 399
  },
  {
    date: new Date('2023-01-26'),
    holdTransactions: 600
  },
  {
    date: new Date('2023-01-27'),
    holdTransactions: 747
  },
  {
    date: new Date('2023-01-28'),
    holdTransactions: 790
  },
]
export function HoldTransaction() {
  const [holdTransactions, setHoldTransactions] = React.useState<string>('3940')
  const [turnoverDates, setTurnoverDates] = React.useState<RevenueChartsData>(mockHoldTransactions)

  return (
    <Card sx={{ minWidth: 275, flex: 1 }}>
      <CardContent>
        <Typography variant='h5' color="text.primary" gutterBottom>
            Количество hold-средств
        </Typography>

        <Typography sx={{ mt: 1.5 }} variant="h2" color="text.primary" gutterBottom>
          {holdTransactions}
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: 14 }} color="text.secondary" gutterBottom>
          Количество транзакций, которые находятся на стороне банка
        </Typography>
        <HoldTransactionsChart data={turnoverDates} />
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  )
}