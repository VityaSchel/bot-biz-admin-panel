import { Container } from '@/widgets/container'
import { Navigation } from '@/widgets/navigation'
import { Page } from '@/widgets/page'

export default function UsersSourcesUsers() {
  return (
    <Container>
      <Navigation />
      <Page
        title='Пользователи источников'
        description='Пользователи, взаимодействовавшие с подключенными источниками. Потенциальные пользователи, которых можно привлечь.'
      >
        
      </Page>
    </Container>
  )
}
