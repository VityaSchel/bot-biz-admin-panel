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
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { 
  mdiCurrencyUsd, 
  mdiCreditCardRefreshOutline, 
  mdiApplicationCogOutline,
  mdiAccountNetwork,
  mdiAccountMultiple,
  mdiRobot,
  mdiCashClock,
  mdiCashSync,
  mdiMessageText,
  mdiHomeAnalytics
} from '@mdi/js'

export default function NavMenu() {
  const { t } = useTranslation('pages_titles')

  return (
    <Box
      className={styles.list}
      role='presentation'
    >
      <List>
        <ListItem disablePadding>
          <Link href='/' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiHomeAnalytics} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('homepage')} />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListSubheader component='div'>
          {t('financial_statistics.subheader')}
        </ListSubheader>
        <ListItem disablePadding>
          <Link href='/statistics/transactions' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiCurrencyUsd} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('financial_statistics.transactions')} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href='/statistics/subscriptions' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiCreditCardRefreshOutline} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('financial_statistics.subscriptions')} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          {/** TODO: replace "statistics" with smthg more general? */}
          <Link href='/statistics/checkouts' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiApplicationCogOutline} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('financial_statistics.checks_settings')} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href='/payouts' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiCashClock} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('financial_statistics.payouts')} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader component='div'>
          {t('users.subheader')}
        </ListSubheader>
        <ListItem disablePadding>
          <Link href='/sources/owners' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiAccountNetwork} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('users.sources_owners')} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href='/sources/users' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiAccountMultiple} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('users.sources_users')} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link href='/sources' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiRobot} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('sources.subheader')} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href='/ads' className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <MDIIcon path={mdiMessageText} size={1} />
              </ListItemIcon>
              <ListItemText primary={t('ads')} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </Box>
  )
}