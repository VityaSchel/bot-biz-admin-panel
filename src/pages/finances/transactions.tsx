import { Container } from '@/widgets/container'
import { Navigation } from '@/widgets/navigation'
import { Page } from '@/widgets/page'

export default function FinancesTransactions() {
  return (
    <Container>
      <Navigation />
      <Page
        title='Транзакции'
        description='Последние транзакции из подключенных источников, детальная информация по каждой транзакции.'
      >
        
      </Page>
    </Container>
  )
}
