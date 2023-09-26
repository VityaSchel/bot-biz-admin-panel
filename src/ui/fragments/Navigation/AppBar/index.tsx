import React from 'react'
import MUIAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Hamburger from 'hamburger-react'
import UserMenu from './UserMenu'
import { useTranslation } from 'next-i18next'

export default function AppBar() {
  const { t } = useTranslation('common')

  return (
    <MUIAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('title')}
        </Typography>
        <Stack>
          <UserMenu />
        </Stack>
      </Toolbar>
    </MUIAppBar>
  )
}