import React from 'react'
import styles from './styles.module.scss'
import AppBar from './AppBar'
import NavMenu from './NavMenu'
import Drawer from '@mui/material/Drawer'

export default function Navigation() {
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <AppBar 
        isMenuOpen={isMenuOpen} 
        setMenuOpen={setMenuOpen}
      />
      <Drawer
        anchor={'left'}
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        className={styles.leftMenu}
      >
        <NavMenu />
      </Drawer>
    </>
  )
}