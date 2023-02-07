import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { DateTimePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormHelperText from '@mui/material/FormHelperText'
import { Stack } from '@mui/material'

export default function CustomIntervalPicker(props: { 
  open: boolean, 
  onCancel: () => any 
  value: [Date, Date] | null,
  onSubmit: (start: Date, end: Date) => any
}) {
  const [start, setStart] = React.useState<Date | null | undefined>()
  const [end, setEnd] = React.useState<Date | null | undefined>()
  const [error, setError] = React.useState<false | string>(false)

  React.useEffect(() => {
    if(props.open) {
      if(props.value === null) {
        setStart(new Date())
        setEnd(new Date())
      } else {
        setStart(props.value[0])
        setEnd(props.value[1])
      }
    }
  }, [open])

  React.useEffect(() => {
    if(!start) setError('Не указана начальная дата')
    else if(!end) setError('Не указана конечная дата')
    else if(start.getTime() > end.getTime()) setError('Начальная дата позднее конечной')
    else setError(false)
  }, [start, end])

  const handleSubmit = () => {
    props.onSubmit(start as Date, end as Date)
  }

  return (
    <Dialog open={props.open} onClose={props.onCancel}>
      <DialogTitle>Выберете интервал дат:</DialogTitle>
      <DialogContent>
        <Stack
          alignItems="center"
          direction="row"
          gap={2}
        >
          <DateTimePicker
            onChange={value => setStart(value)}
            value={start}
            renderInput={props => <TextField {...props} />}
          />
          <span>—</span>
          <DateTimePicker
            onChange={value => setEnd(value)}
            value={end}
            renderInput={props => <TextField {...props} />}
          />
        </Stack>
        
        {error && <FormHelperText error>{error}</FormHelperText>}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel}>Отмена</Button>
        <Button onClick={handleSubmit} disabled={error !== false}>Установить</Button>
      </DialogActions>
    </Dialog>
  )
}