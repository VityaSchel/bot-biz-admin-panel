import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// type Value = [Date, Date]
type Value = '24h' | '7d' | ''// | [Date, Date]
export default function ChartsIntervalSelect(props: { value: Value, setValue: React.SetStateAction<Value>[1] }) {
  type SelectValue = number | 'custom'
  const handleChange = (e: SelectChangeEvent<SelectValue>) => {
    const value = e.target.value as SelectValue
    if(value === 'custom') {
      //
    } else {
      // props.setValue([Date.now() - 1000*60*value, new Date()])
    }
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={props.value}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={24}>За последние 24 часа</MenuItem>
        <MenuItem value={7 * 24}>За последние 7 суток</MenuItem>
        <MenuItem value={30 * 24}>За последние 30 дней</MenuItem>
        <MenuItem value={90 * 24}>За последние 90 дней</MenuItem>
        <MenuItem value='custom'>Задать свой интервал...</MenuItem>
      </Select>
    </FormControl>
  )
}