import React from 'react'
import MUIAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Hamburger from 'hamburger-react'
import UserMenu from './UserMenu'

export default function AppBar(props: {
  isMenuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <MUIAppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Hamburger toggled={props.isMenuOpen} toggle={props.setMenuOpen} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Админка
        </Typography>
        <Stack>
          <UserMenu />
        </Stack>
      </Toolbar>
    </MUIAppBar>
  )
}