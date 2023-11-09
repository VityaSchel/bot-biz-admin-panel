import { Container } from '@/widgets/container'
import { Navigation } from '@/widgets/navigation'
import { Page } from '@/widgets/page'

export default function FinancesSubscriptions() {
  return (
    <Container>
      <Navigation />
      <Page
        title='Подписки'
        description='Активные и отключенные подписки пользователей в системе.'
      >
        
      </Page>
    </Container>
  )
}
