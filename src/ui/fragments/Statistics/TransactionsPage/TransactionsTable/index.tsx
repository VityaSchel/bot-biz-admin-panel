import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import CheckCircle from '@mui/icons-material/CheckCircle'
import PendingCircle from '@mui/icons-material/Pending'
import Cancel from '@mui/icons-material/Cancel'
import Help from '@mui/icons-material/Help'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

type Transaction = {
  id: string,
  sum: number
  addSum: number,
  checkoutService: string,
  operationType: string,
  notificationStatus: 'RECEIVED' | 'SENT' | 'FAILURE' | 'UNKNOWN'
  source: { id: string, title: string, picture: string }
  site: string
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'sum',
    headerName: 'Полная сумма',
    flex: 2,
    editable: true,
  },
  {
    field: 'addSum',
    headerName: 'Сумма пополнения',
    flex: 2,
    editable: true,
  },
  {
    field: 'checkoutService',
    headerName: 'Касса',
    flex: 3,
    editable: true,
  },
  {
    field: 'operationType',
    headerName: 'Тип операции',
    description: 'Здесь будут описаны типы операций',
    flex: 3,
    valueGetter: (params: GridValueGetterParams) =>
      ({
        'operationType1': 'Тип 1',
        'operationType2': 'Тип 2',
        'operationType3': 'Тип 3',
      }[params.row.operationType as string])
  },
  {
    field: 'notificationStatus',
    headerName: 'Статус уведомления',
    flex: 3,
    renderCell: (params: GridRenderCellParams) => (
      <Chip 
        icon={{
          'RECEIVED': <CheckCircle />,
          'SENT': <PendingCircle />,
          'FAILURE': <Cancel />,
          'UNKNOWN': <Help />,
        }[params.row.notificationStatus as string]}
        label={{
          'RECEIVED': 'Получено',
          'SENT': 'Отправлено',
          'FAILURE': 'Ошибка',
          'UNKNOWN': 'Неизвестно',
        }[params.row.notificationStatus as string]}
        variant="outlined" 
      />
    )
  },
  {
    field: 'source',
    headerName: 'Источник',
    flex: 3,
    renderCell: (params: GridRenderCellParams) => (
      <Stack>
        <Image src={params.row.source.picture} width={30} height={30} style={{ borderRadius: 99 }} alt='Аватарка источника' />
        <Stack>
          <Typography>{params.row.source.title}</Typography>
          <Typography>{params.row.source.id}</Typography>
        </Stack>
      </Stack>
    )
  },
  {
    field: 'site',
    headerName: 'Сайт',
    flex: 3
  },
]

const mockSources = [
  { site: 'https://winline.ru', source: { id: '759812', title: 'Winline Russia', picture: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ab/43/52/ab43520a-dcdc-4c72-96b5-7228f8a5892b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp' } },
  { site: 'https://meetup.love', source: { id: '123987', title: 'Дейтинг', picture: 'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/23/93/f1/2393f106-9041-8c95-ad0d-660cecba5efa/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp' } },
  { site: 'https://betrader.today', source: { id: '576182', title: 'Курс «Стань успешным»', picture: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/2b4716a1-be5b-423b-8d5b-b9c574939c01/360' } },
]

const mockData: Transaction[] = [
  { id: '178123', sum: 1000, addSum: 893.78, checkoutService: 'QIWI', operationType: 'Пополнение кошелька', notificationStatus: 'RECEIVED', source: mockSources[0].source, site: mockSources[0].site },
  { id: '168120', sum: 3199, addSum: 3101.00, checkoutService: 'ЮКасса', operationType: 'Оплата подписки', notificationStatus: 'RECEIVED', source: mockSources[1].source, site: mockSources[1].site },
  { id: '167192', sum: 569, addSum: 553.44, checkoutService: 'QIWI', operationType: 'Покупка товара', notificationStatus: 'UNKNOWN', source: mockSources[2].source, site: mockSources[2].site },
  { id: '165751', sum: 500, addSum: 489.32, checkoutService: 'Coingate', operationType: 'Пополнение кошелька', notificationStatus: 'RECEIVED', source: mockSources[0].source, site: mockSources[0].site },
  { id: '157101', sum: 1000, addSum: 960.99, checkoutService: 'Лава', operationType: 'Пополнение кошелька', notificationStatus: 'SENT', source: mockSources[0].source, site: mockSources[0].site },
  { id: '150921', sum: 1200, addSum: 1131.42, checkoutService: 'Лава', operationType: 'Пополнение кошелька', notificationStatus: 'FAILURE', source: mockSources[0].source, site: mockSources[0].site },
  { id: '149851', sum: 100, addSum: 98.12, checkoutService: 'FreeKassa', operationType: 'Покупка суперлайка', notificationStatus: 'RECEIVED', source: mockSources[0].source, site: mockSources[0].site },
  { id: '149601', sum: 11000, addSum: 10693.87, checkoutService: 'QIWI', operationType: 'Пополнение кошелька', notificationStatus: 'FAILURE', source: mockSources[0].source, site: mockSources[0].site },
  { id: '147123', sum: 2399, addSum: 1384.34, checkoutService: 'ЮКасса', operationType: 'Продление подписки', notificationStatus: 'SENT', source: mockSources[1].source, site: mockSources[1].site },
  { id: '132190', sum: 199, addSum: 194.11, checkoutService: 'ЮКасса', operationType: 'Оплата промо подписки', notificationStatus: 'SENT', source: mockSources[1].source, site: mockSources[1].site },
]

export default function TransactionsTable() {
  const [data, setData] = React.useState<null | Transaction[]>(mockData)

  return (
    <Stack
      direction='column'
      sx={{ padding: 1, minHeight: 'inherit' }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ height: 'inherit' }}
      />
    </Stack>
  )
}