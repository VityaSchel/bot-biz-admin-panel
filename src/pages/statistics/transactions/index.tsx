import Container from '/src/ui/fragments/Container'
import TransactionsTable from '/src/ui/fragments/Statistics/TransactionsPage/TransactionsTable'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function TransactionsPage() {
  return (
    <Container>
      <TransactionsTable />
    </Container>
  )
}


export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'pages_titles']))
    }
  }
}
