import { Chart } from '@/entity/chart'
import { Button } from '@/shared/shadcn/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/shadcn/ui/card'
import { ArrowRight } from 'lucide-react'

export function StatisticsCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <ChartCard
        title={'Доход сервиса'}
        description='Денежные средства, которые вы выручили со всех транзакций.'
        value={Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(117491)}
      />
      <ChartCard
        title={'Оборот сервиса'}
        description='Все учтенные денежные средства вместе с hold-транзакциями.'
        value={Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(2971561)}
      />
      <ChartCard
        title={'Холд-транзакции'}
        description='Количество транзакций, которые находятся на стороне банка.'
        value={Intl.NumberFormat('ru-RU').format(3940)}
      />
      <ChartCard
        title={'Холд-средства'}
        description='Денежные средства, которые находятся на стороне банка.'
        value={Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(1057430)}
      />
    </div>
  )
}

function ChartCard({ title, description, value }: {
  title: string
  description: string
  value: string
}) {
  return (
    <Card className="w-full h-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">
          {value}
        </h1>
        <Chart />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Подробнее <ArrowRight size={18} className='ml-2' /></Button>
      </CardFooter>
    </Card>
  )
}