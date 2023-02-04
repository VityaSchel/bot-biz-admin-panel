import Stack from '@mui/material/Stack'
import { Revenue, Turnover, HoldTransaction, HoldMoney } from './Cards'

export default function Analytics() {
  return (
    <Stack spacing={2} sx={{ padding: 5 }}>
      <Stack spacing={2} direction='row'>
        <Revenue />
        <Turnover />
      </Stack>
      <Stack spacing={2} direction='row'>
        <HoldTransaction />
        <HoldMoney />
      </Stack>
    </Stack>
  )
}

