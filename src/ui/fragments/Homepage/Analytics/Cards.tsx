import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import MDIIcon from '@mdi/react'
import { mdiHelpCircleOutline, mdiArrowRight } from '@mdi/js'
import Stack from '@mui/material/Stack'

import RevenueChart from '../Charts/RevenueChart'
import type { ChartsData as RevenueChartsData } from '../Charts/RevenueChart'
import HoldTransactionsChart from '../Charts/HoldTransactions'
import type { ChartsData as HoldTransactionsChartsData } from '../Charts/HoldTransactions'
import HoldMoneyChart from '../Charts/HoldMoney'
import type { ChartsData as HoldMoneyChartsData } from '../Charts/HoldMoney'

const cardStyles = { minWidth: 275, flex: 1, padding: 1 }

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
    <Card sx={cardStyles} variant="outlined">
      <CardContent>
        <CardTitle
          title='Доход сервиса'
          description='Денежные средства, которые мы выручили'
        />

        <CardValue>{revenue}</CardValue>
        <RevenueChart data={revenueDates} />
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее <MDIIcon path={mdiArrowRight} size={1} /></Button>
      </CardActions>
    </Card>
  )
}

export function Turnover() {
  const [turnover, setTurnover] = React.useState<string>('2,971,505 ₽')
  const [turnoverDates, setTurnoverDates] = React.useState<RevenueChartsData>(revenueMockData)

  return (
    <Card sx={cardStyles} variant="outlined">
      <CardContent>
        <CardTitle 
          title='Оборот сервиса'
          description='Денежные средства, которые у нас есть, вместе с hold-транзакциями'
        />

        <CardValue>{turnover}</CardValue>
        <RevenueChart data={turnoverDates} />
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее <MDIIcon path={mdiArrowRight} size={1} /></Button>
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
  const [holdTransactionDates, setHoldTransactionDates] = React.useState<HoldTransactionsChartsData>(mockHoldTransactions)

  return (
    <Card sx={cardStyles} variant="outlined">
      <CardContent>
        <CardTitle
          title='Количество hold-транзакций'
          description='Количество транзакций, которые находятся на стороне банка'
        />

        <CardValue>{holdTransactions}</CardValue>
        <HoldTransactionsChart data={holdTransactionDates} />
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  )
}

const mockHoldMoney: HoldMoneyChartsData = [
  {
    date: new Date('2023-01-22'),
    holdMoney: 131753
  },
  {
    date: new Date('2023-01-23'),
    holdMoney: 118578
  },
  {
    date: new Date('2023-01-24'),
    holdMoney: 158104
  },
  {
    date: new Date('2023-01-25'),
    holdMoney: 131753
  },
  {
    date: new Date('2023-01-26'),
    holdMoney: 144928
  },
  {
    date: new Date('2023-01-27'),
    holdMoney: 197630
  },
  {
    date: new Date('2023-01-28'),
    holdMoney: 171279
  },
]
export function HoldMoney() {
  const [holdMoney, setHoldMoney] = React.useState<string>('1,054,027 ₽')
  const [holdMoneyDates, setHoldMoneyDates] = React.useState<HoldMoneyChartsData>(mockHoldMoney)

  return (
    <Card sx={cardStyles} variant="outlined">
      <CardContent>
        <CardTitle
          title='Количество hold-средств'
          description='Денежные средства, которые находятся на стороне банка'
        />
        <CardValue>{holdMoney}</CardValue>
        <HoldMoneyChart data={holdMoneyDates} />
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <
          <Button size="small">Подробнее <MDIIcon path={mdiArrowRight} size={1} /></Button>
        </Stack>
      </CardActions>
    </Card>
  )
}

function CardTitle(props: { title: string, description: string }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Typography variant='overline' color="text.secondary">
        {props.title}
      </Typography>

      <Tooltip title={props.description} placement="bottom-end">
        <IconButton>
          <MDIIcon path={mdiHelpCircleOutline} size={1} />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

function CardValue(props: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontWeight: 500, mb: 2 }} variant="h3" color="text.primary" gutterBottom>
      {props.children}
    </Typography>
  )
}