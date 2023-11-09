import { Separator } from '@/shared/shadcn/ui/separator'
import Head from 'next/head'

export function Page({ title, description, children }: React.PropsWithChildren<{
  title: string
  description: string
}>) {
  return (
    <>
      <Head>
        <title>{`${title} — Админка`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="space-y-6 flex-1">
        <div className='mt-6 space-y-2'>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <Separator />
        {children}
      </div>
    </>
  )
}