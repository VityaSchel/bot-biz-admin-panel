import Grid from '@mui/material/Grid'
import { Revenue, Turnover, HoldTransaction, HoldMoney } from './Cards'

export default function Analytics() {
  return (
    <Grid container spacing={2} sx={{ padding: 5 }}>
      <Grid item xs={12} lg={6}>
        <Revenue />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Turnover />
      </Grid>
      <Grid item xs={12} lg={6}>
        <HoldTransaction />
      </Grid>
      <Grid item xs={12} lg={6}>
        <HoldMoney />
      </Grid>
    </Grid>
  )
}

