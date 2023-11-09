import { SidebarNav } from '@/features/sidenav'
import {
  mdiCurrencyUsd,
  mdiCreditCardRefreshOutline,
  mdiApplicationCogOutline,
  mdiAccountNetwork,
  mdiAccountMultiple,
  mdiRobot,
  mdiCashClock,
  mdiMessageText,
  mdiHomeAnalytics
} from '@mdi/js'
import MDIIcon from '@mdi/react'

export function Navigation() {
  return (
    <SidebarNav
      groups={[
        {
          title: 'Главная',
          items: [
            { href: '/', title: 'Статистика', icon: <MDIIcon size={1} path={mdiHomeAnalytics} /> },
          ]
        },
        { 
          title: 'Финансы', 
          items: [
            { href: '/finances/transactions', title: 'Транзакции', icon: <MDIIcon size={1} path={mdiCurrencyUsd} /> },
            { href: '/finances/subscriptions', title: 'Подписки', icon: <MDIIcon size={1} path={mdiCreditCardRefreshOutline} /> },
            { href: '/finances/checkouts', title: 'Настройка касс', icon: <MDIIcon size={1} path={mdiApplicationCogOutline} /> },
            { href: '/finances/payouts', title: 'Выплаты', icon: <MDIIcon size={1} path={mdiCashClock} /> },
          ] 
        },
        {
          title: 'Пользователи',
          items: [
            { href: '/users/sources-owners', title: 'Владельцы источников', icon: <MDIIcon size={1} path={mdiAccountNetwork} /> },
            { href: '/users/sources-users', title: 'Пользователи источников', icon: <MDIIcon size={1} path={mdiAccountMultiple} /> },
          ]
        },
        {
          title: 'Источники',
          items: [
            { href: '/sources', title: 'Источники', icon: <MDIIcon size={1} path={mdiRobot} /> },
            { href: '/distributions', title: 'Рассылки', icon: <MDIIcon size={1} path={mdiMessageText} /> },
          ]
        }
      ]}
      className='sticky top-[97px] h-fit w-72'
    />
  )
}