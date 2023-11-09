import { Container } from '@/widgets/container'
import { Navigation } from '@/widgets/navigation'
import { Page } from '@/widgets/page'

export default function FinancesCheckouts() {
  return (
    <Container>
      <Navigation />
      <Page
        title='Настройки касс'
        description='Настройки касс для оплаты подписок, настройки подключения кассы, секретные ключи.'
      >
        
      </Page>
    </Container>
  )
}
