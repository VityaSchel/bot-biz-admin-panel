import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { TextField } from '@mui/material'
import CustomIntervalPicker from './CustomIntervalPicker'

type DefaultValues = '24h' | '7d' | '30d' | '90d'
type Value = DefaultValues// | [Date, Date]
export default function ChartsIntervalSelect(props: { value: Value, setValue: React.Dispatch<Value> }) {
  const [customDate, setCustomDate] = React.useState<null | [Date, Date]>(null)
  const [customDatePickerVisible, setCustomDatePickerVisible] = React.useState(false)

  type SelectValue = DefaultValues | 'custom'
  const handleChange = (e: SelectChangeEvent<SelectValue>) => {
    const value = e.target.value as SelectValue
    if(value === 'custom') {
      setCustomDatePickerVisible(true)
    } else {
      // props.setValue([Date.now() - 1000*60*value, new Date()])
      props.setValue(value)
    }
  }

  const handleSetCustomDate = (start: Date, end: Date) => {
    setCustomDate([start, end])
    setCustomDatePickerVisible(false)
  }

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          // labelId="demo-simple-select-standard-label"  
          // id='interval-select' TODO: fix duplicated ids
          value={props.value}
          onChange={handleChange}
        >
          <MenuItem value={'24h'}>За последние 24 часа</MenuItem>
          <MenuItem value={'7d'}>За последние 7 суток</MenuItem>
          <MenuItem value={'30d'}>За последние 30 дней</MenuItem>
          <MenuItem value={'90d'}>За последние 90 дней</MenuItem>
          <MenuItem value='custom'>Задать свой интервал...</MenuItem>
        </Select>
      </FormControl>
      <CustomIntervalPicker
        open={customDatePickerVisible}
        value={customDate}
        onCancel={() => setCustomDatePickerVisible(false)}
        onSubmit={handleSetCustomDate}
      />
    </>
  )
}