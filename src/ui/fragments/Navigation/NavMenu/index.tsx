import styles from './styles.module.scss'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import MDIIcon from '@mdi/react'
import { mdiBullhorn, mdiLink, mdiAccount, mdiAccountGroup, mdiSendCircle, mdiNotebookEdit, mdiBookEdit, mdiTag } from '@mdi/js'
import Link from 'next/link'

export default function NavMenu() {
  return (
    <Box
      className={styles.list}
      role='presentation'
    >
      <List>
        <ListSubheader component='div'>
          subhead
        </ListSubheader>
        <ListItem disablePadding>
          <Link href='/path' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiNotebookEdit} size={1} />
              </ListItemIcon>
              <ListItemText primary='text' />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href='/path' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiNotebookEdit} size={1} />
              </ListItemIcon>
              <ListItemText primary='text' />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader component='div'>
          subhead 2
        </ListSubheader>
        <ListItem disablePadding>
          <Link href='/path2' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiBookEdit} size={1} />
              </ListItemIcon>
              <ListItemText primary='text2' />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href='/path2' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiBookEdit} size={1} />
              </ListItemIcon>
              <ListItemText primary='text2' />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader component='div'>
          subhead 3
        </ListSubheader>
        <ListItem disablePadding>
          <Link href='/path3' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiBullhorn} size={1} />
              </ListItemIcon>
              <ListItemText primary='Text' />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href='/path3' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiLink} size={1} />
              </ListItemIcon>
              <ListItemText primary='Text' />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader component='div'>
          Subhead4
        </ListSubheader>
        <ListItem disablePadding>
          <Link href='/path4' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiAccountGroup} size={1} />
              </ListItemIcon>
              <ListItemText primary='Text4' />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </Box>
  )
}