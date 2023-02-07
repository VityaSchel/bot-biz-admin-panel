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
import { useRouter } from 'next/router'
import cx from 'classnames'

export default function NavMenu() {
  const { t } = useTranslation('pages_titles')

  return (
    <Box
      className={styles.list}
      role='presentation'
    >
      <List>
        <NavMenuItem
          link='/'
          mdiIconPath={mdiHomeAnalytics}
          text={t('homepage')}
        />
        <Divider />
        <ListSubheader component='div'>
          {t('financial_statistics.subheader')}
        </ListSubheader>
        <NavMenuItem
          link='/statistics/transactions'
          mdiIconPath={mdiCurrencyUsd}
          text={t('financial_statistics.transactions')}
        />
        <NavMenuItem
          link='/statistics/subscriptions'
          mdiIconPath={mdiCreditCardRefreshOutline}
          text={t('financial_statistics.subscriptions')}
        />
        <NavMenuItem
          link='/statistics/checkouts' 
          mdiIconPath={mdiApplicationCogOutline} 
          text={t('financial_statistics.checks_settings')}
        />
        <NavMenuItem
          link='/payouts'
          mdiIconPath={mdiCashClock}
          text={t('financial_statistics.payouts')}
        />
      </List>
      <Divider />
      <List>
        <ListSubheader component='div'>
          {t('users.subheader')}
        </ListSubheader>
        <NavMenuItem
          link='/sources/owners'
          mdiIconPath={mdiAccountNetwork}
          text={t('users.sources_owners')}
        />
        <NavMenuItem
          link='/sources/users'
          mdiIconPath={mdiAccountMultiple}
          text={t('users.sources_users')}
        />
      </List>
      <Divider />
      <List>
        <NavMenuItem
          link='/sources'
          mdiIconPath={mdiRobot}
          text={t('sources.subheader')}
        />
        <NavMenuItem
          link='/ads'
          mdiIconPath={mdiMessageText}
          text={t('ads')}
        />
      </List>
      <Divider />
    </Box>
  )
}

function NavMenuItem(props: { text: string, link: string, mdiIconPath: string }) {
  const router = useRouter()
  const isActive = router.asPath.split('?')[0] === props.link

  return (
    <ListItem disablePadding>
      <Link href={props.link} className={cx(styles.link, { [styles.active]: isActive })}>
        <ListItemButton>
          <ListItemIcon>
            <MDIIcon path={props.mdiIconPath} size={1} />
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>
      </Link>
    </ListItem>
  )
}