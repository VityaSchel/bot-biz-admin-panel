import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import CheckCircle from '@mui/icons-material/CheckCircle'
import PendingCircle from '@mui/icons-material/Pending'
import Cancel from '@mui/icons-material/Cancel'
import Help from '@mui/icons-material/Help'
import Stack from '@mui/material/Stack'

type Transaction = {
  id: string,
  sum: number
  addSum: number,
  checkoutService: string,
  operationType: string,
  notificationStatus: 'RECEIVED' | 'SENT' | 'FAILURE' | 'UNKNOWN'
  
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'sum',
    headerName: 'Полня сумма',
    // width: 150,
    editable: true,
  },
  {
    field: 'addSum',
    headerName: 'Сумма пополнения',
    // width: 150,
    editable: true,
  },
  {
    field: 'checkoutService',
    headerName: 'Касса',
    // width: 110,
    editable: true,
  },
  {
    field: 'operationType',
    headerName: 'Тип операции',
    description: 'Здесь будут описаны типы операций',
    // width: 160,
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
    // width: 160,
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
]

const mockData: Transaction[] = [
  { id: '178123', sum: 1000, addSum: 893.78, checkoutService: 'QIWI', operationType: 'Пополнение кошелька', notificationStatus: 'RECEIVED' },
  { id: '168120', sum: 3199, addSum: 3101.00, checkoutService: 'ЮКасса', operationType: 'Оплата подписки', notificationStatus: 'RECEIVED' },
  { id: '167192', sum: 569, addSum: 553.44, checkoutService: 'QIWI', operationType: 'Покупка товара', notificationStatus: 'UNKNOWN' },
  { id: '165751', sum: 500, addSum: 489.32, checkoutService: 'Coingate', operationType: 'Пополнение кошелька', notificationStatus: 'RECEIVED' },
  { id: '157101', sum: 1000, addSum: 960.99, checkoutService: 'Лава', operationType: 'Пополнение кошелька', notificationStatus: 'SENT' },
  { id: '150921', sum: 1200, addSum: 1131.42, checkoutService: 'Лава', operationType: 'Пополнение кошелька', notificationStatus: 'FAILURE' },
  { id: '149851', sum: 100, addSum: 98.12, checkoutService: 'FreeKassa', operationType: 'Покупка суперлайка', notificationStatus: 'RECEIVED' },
  { id: '149601', sum: 11000, addSum: 10693.87, checkoutService: 'QIWI', operationType: 'Пополнение кошелька', notificationStatus: 'FAILURE' },
  { id: '147123', sum: 2399, addSum: 1384.34, checkoutService: 'ЮКасса', operationType: 'Продление подписки', notificationStatus: 'SENT' },
  { id: '132190', sum: 199, addSum: 194.11, checkoutService: 'ЮКасса', operationType: 'Оплата промо подписки', notificationStatus: 'SENT' },
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