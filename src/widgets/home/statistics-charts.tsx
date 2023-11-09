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
    <div className='grid grid-cols-2 gap-4'>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Доход сервиса</CardTitle>
          <CardDescription>Денежные средства, которые вы выручили со всех транзакций.</CardDescription>
        </CardHeader>
        <CardContent>
          <Chart />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Подробнее <ArrowRight size={18} className='ml-2' /></Button>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Оборот сервиса</CardTitle>
          <CardDescription>Все учтенные денежные средства вместе с hold-транзакциями.</CardDescription>
        </CardHeader>
        <CardContent>
          <Chart />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Подробнее <ArrowRight size={18} className='ml-2' /></Button>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Холд-транзакции</CardTitle>
          <CardDescription>Количество транзакций, которые находятся на стороне банка.</CardDescription>
        </CardHeader>
        <CardContent>
          <Chart />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Подробнее <ArrowRight size={18} className='ml-2' /></Button>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Холд-средства</CardTitle>
          <CardDescription>Денежные средства, которые находятся на стороне банка.</CardDescription>
        </CardHeader>
        <CardContent>
          <Chart />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Подробнее <ArrowRight size={18} className='ml-2' /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}