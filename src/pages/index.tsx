import { Container } from '@/widgets/container'
import { StatisticsCharts } from '@/widgets/home/statistics-charts'
import { Navigation } from '@/widgets/navigation'
import { Page } from '@/widgets/page'

export default function Home() {
  return (
    <Container>
      <Navigation />
      <Page
        title='Статистика'
        description='Статистика ваших источников и подключенных модулей, общая активность пользователей и доход'
      >
        <StatisticsCharts />
      </Page>
    </Container>
  )
}
