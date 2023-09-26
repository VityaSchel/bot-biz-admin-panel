import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

import { ruRU } from '@mui/x-data-grid'
import { ruRU as coreRuRU } from '@mui/material/locale'

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
}, ruRU, coreRuRU)

export default theme