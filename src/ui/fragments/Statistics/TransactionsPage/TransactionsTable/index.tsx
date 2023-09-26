import React from 'react'
import styles from './styles.module.scss'
import { DataGrid, GridColDef, GridValueFormatterParams, GridRenderCellParams, GridRenderEditCellParams, useGridApiContext } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import CheckCircle from '@mui/icons-material/CheckCircle'
import PendingCircle from '@mui/icons-material/Pending'
import Cancel from '@mui/icons-material/Cancel'
import Help from '@mui/icons-material/Help'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

type Transaction = {
  id: string,
  datetime: Date,
  sum: number,
  addSum: number,
  checkoutService: string,
  operationType: string,
  notificationStatus: NotificationStatus['id'],
  source: { id: string, title: string, picture: string }
  site: string
}

type CheckoutService = { id: string, title: string, color: string }
const checkoutServices: CheckoutService[] = [
  { id: 'qiwi', title: 'QIWI', color: 'orange' },
  { id: 'yookassa', title: 'ЮКасса', color: 'rebeccapurple' },
  { id: 'lava', title: 'Лава', color: 'orangered' },
  { id: 'freekassa', title: 'FreeKassa', color: 'darkred' },
  { id: 'coingate', title: 'Coingate', color: 'darkgoldenrod' },
]

const currencyValueGetter = (params: GridValueFormatterParams) =>
  (params.value as number).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' ₽'

const checkoutServiceRenderCell = (params: GridRenderCellParams) => {
  const service = checkoutServices.find(s => s.id === params.value) as CheckoutService

  return (
    <span style={{ color: service.color }}>{service.title}</span>
  )
}

type NotificationStatus = { id: 'RECEIVED' | 'SENT' | 'FAILURE' | 'UNKNOWN', label: string, icon: React.ReactNode }
const notificationStatuses = [
  { id: 'RECEIVED', label: 'Получено', icon: <CheckCircle /> },
  { id: 'SENT', label: 'Отправлено', icon: <PendingCircle /> },
  { id: 'FAILURE', label: 'Ошибка', icon: <Cancel /> },
  { id: 'UNKNOWN', label: 'Неизвестно', icon: <Help /> },
]

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'datetime',
    type: 'date',
    headerName: 'Дата',
    flex: 2,
    editable: true,
    valueFormatter: (params: GridValueFormatterParams) =>
      new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(params.value)
  },
  {
    field: 'sum',
    type: 'number',
    headerName: 'Полная сумма',
    flex: 2,
    editable: true,
    valueFormatter: currencyValueGetter
  },
  {
    field: 'addSum',
    type: 'number',
    headerName: 'Сумма пополнения',
    flex: 2,
    editable: true,
    valueFormatter: currencyValueGetter
  },
  {
    field: 'checkoutService',
    headerName: 'Касса',
    flex: 2,
    editable: true,
    renderEditCell: (params: GridRenderEditCellParams) => (
      <SelectEditCell
        label='Касса'
        value={params.value} id={params.id} field={params.field}
        options={
          checkoutServices.map(service => (
            <MenuItem value={service.id} key={service.id}>{service.title}</MenuItem>
          ))
        }
      />
    ),
    renderCell: checkoutServiceRenderCell
  },
  {
    field: 'operationType',
    headerName: 'Тип операции',
    description: 'Здесь будут описаны типы операций',
    flex: 4,
    editable: true,
    // valueGetter: (params: GridValueGetterParams) =>
    //   ({
    //     'operationType1': 'Тип 1',
    //     'operationType2': 'Тип 2',
    //     'operationType3': 'Тип 3',
    //   }[params.row.operationType as string])
  },
  {
    field: 'notificationStatus',
    headerName: 'Статус уведомления',
    flex: 3.4,
    editable: true,
    renderCell: (params: GridRenderCellParams) => {
      const status = notificationStatuses.find(s => s.id === params.row.notificationStatus) as NotificationStatus
      return (
        <Chip 
          icon={status.icon}
          label={status.label}
          variant="outlined" 
        />
      )
    },
    renderEditCell: (params: GridRenderEditCellParams) => (
      <SelectEditCell
        label='Статус'
        value={params.value} id={params.id} field={params.field}
        options={
          notificationStatuses.map(status => (
            <MenuItem value={status.id} key={status.id}>{status.label}</MenuItem>
          ))
        }
      />
    ),
  },
  {
    field: 'source',
    headerName: 'Источник',
    flex: 5.6,
    renderCell: (params: GridRenderCellParams) => (
      <Stack direction='row' gap={2} alignItems='center'>
        <Image src={params.row.source.picture} width={30} height={30} style={{ borderRadius: 99 }} alt='Аватарка источника' />
        <Stack>
          <Typography>{params.row.source.title}</Typography>
          <Typography variant='caption'>ID: {params.row.source.id}</Typography>
        </Stack>
      </Stack>
    )
  },
  {
    field: 'site',
    headerName: 'Сайт',
    flex: 4,
    editable: true,
    renderCell: (params: GridRenderCellParams) => (
      <Link href={params.row.site} className={styles.link}>
        {params.row.site}
      </Link>
    )
  },
]

function SelectEditCell(props: { id: GridRenderEditCellParams['id'], field: GridRenderEditCellParams['field'], value: GridRenderEditCellParams['value'], label: string, options: React.ReactNode[] }) {
  const apiRef = useGridApiContext()
  
  const handleChange = (e: SelectChangeEvent) => {
    apiRef.current.setEditCellValue({ id: props.id, field: props.field, value: e.target.value })
  }
  
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.value}
        label={props.label}
        onChange={handleChange}
      >
        {props.options}
      </Select>
    </FormControl>
  )
}

const mockSources = [
  { site: 'https://winline.ru', source: { id: '759812', title: 'Winline Russia', picture: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ab/43/52/ab43520a-dcdc-4c72-96b5-7228f8a5892b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp' } },
  { site: 'https://meetup.love', source: { id: '123987', title: 'Дейтинг', picture: 'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/23/93/f1/2393f106-9041-8c95-ad0d-660cecba5efa/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp' } },
  { site: 'https://betrader.today', source: { id: '576182', title: 'Курс «Стань успешным»', picture: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/2b4716a1-be5b-423b-8d5b-b9c574939c01/360' } },
]

const mockData: Transaction[] = [
  { id: '178123', datetime: new Date(Date.now() - 1000), sum: 1000, addSum: 893.78, checkoutService: 'qiwi', operationType: 'Пополнение кошелька', notificationStatus: 'RECEIVED', source: mockSources[0].source, site: mockSources[0].site },
  { id: '168120', datetime: new Date(Date.now() - 10000), sum: 3199, addSum: 3101.00, checkoutService: 'yookassa', operationType: 'Оплата подписки', notificationStatus: 'RECEIVED', source: mockSources[1].source, site: mockSources[1].site },
  { id: '167192', datetime: new Date(Date.now() - 90000), sum: 569, addSum: 553.44, checkoutService: 'qiwi', operationType: 'Покупка товара', notificationStatus: 'UNKNOWN', source: mockSources[2].source, site: mockSources[2].site },
  { id: '165751', datetime: new Date(Date.now() - 500000), sum: 500, addSum: 489.32, checkoutService: 'coingate', operationType: 'Пополнение кошелька', notificationStatus: 'RECEIVED', source: mockSources[0].source, site: mockSources[0].site },
  { id: '157101', datetime: new Date(Date.now() - 1500000), sum: 1000, addSum: 960.99, checkoutService: 'lava', operationType: 'Пополнение кошелька', notificationStatus: 'SENT', source: mockSources[0].source, site: mockSources[0].site },
  { id: '150921', datetime: new Date(Date.now() - 1800000), sum: 1200, addSum: 1131.42, checkoutService: 'lava', operationType: 'Пополнение кошелька', notificationStatus: 'FAILURE', source: mockSources[0].source, site: mockSources[0].site },
  { id: '149851', datetime: new Date(Date.now() - 4500000), sum: 100, addSum: 98.12, checkoutService: 'freekassa', operationType: 'Покупка суперлайка', notificationStatus: 'RECEIVED', source: mockSources[0].source, site: mockSources[0].site },
  { id: '149601', datetime: new Date(Date.now() - 10000000), sum: 11000, addSum: 10693.87, checkoutService: 'qiwi', operationType: 'Пополнение кошелька', notificationStatus: 'FAILURE', source: mockSources[0].source, site: mockSources[0].site },
  { id: '147123', datetime: new Date(Date.now() - 20000000), sum: 2399, addSum: 1384.34, checkoutService: 'yookassa', operationType: 'Продление подписки', notificationStatus: 'SENT', source: mockSources[1].source, site: mockSources[1].site },
  { id: '132190', datetime: new Date(Date.now() - 50000000), sum: 199, addSum: 194.11, checkoutService: 'yookassa', operationType: 'Оплата промо подписки', notificationStatus: 'SENT', source: mockSources[1].source, site: mockSources[1].site },
]

export default function TransactionsTable() {
  const [data, setData] = React.useState<null | Transaction[]>(mockData)

  return (
    <Stack
      direction='column'
      sx={{ padding: 5, minHeight: 'inherit' }}
    >
      <DataGrid
        loading={data === null}
        rows={data as Transaction[]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 50]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ height: 'inherit' }}
      />
    </Stack>
  )
}