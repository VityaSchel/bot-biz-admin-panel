import { SidebarNav } from '@/features/sidenav'
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
import MDIIcon from '@mdi/react'

export function Navigation() {
  return (
    <SidebarNav
      items={[
        { href: '/', title: 'Статистика', icon: <MDIIcon size={1} path={mdiHomeAnalytics} /> },
        { group: true, title: 'Финансы' },
        { href: '/finances/transactions', title: 'Транзакции', icon: <MDIIcon size={1} path={mdiCurrencyUsd} /> },
        { href: '/finances/subscriptions', title: 'Подписки', icon: <MDIIcon size={1} path={mdiCreditCardRefreshOutline} /> },
        { href: '/finances/checkouts', title: 'Настройка касс', icon: <MDIIcon size={1} path={mdiApplicationCogOutline} /> },
        { href: '/finances/payouts', title: 'Выплаты', icon: <MDIIcon size={1} path={mdiCashSync} /> },
        { group: true, title: 'Пользователи' },
        { href: '/users/sources-owners', title: 'Владельцы источников', icon: <MDIIcon size={1} path={mdiAccountNetwork} /> },
        { href: '/users/sources-users', title: 'Пользователи источников', icon: <MDIIcon size={1} path={mdiAccountMultiple} /> },
        { group: true, title: 'Источники' },
        { href: '/sources', title: 'Источники', icon: <MDIIcon size={1} path={mdiRobot} /> },
        { href: '/distributions', title: 'Рассылки', icon: <MDIIcon size={1} path={mdiMessageText} /> },
      ]}
    />
  )
}