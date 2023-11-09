import { Separator } from '@/shared/shadcn/ui/separator'

export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="px-10 pb-4 block">
      <div className='sticky top-0 bg-background z-10 pt-10'>
        <header className='flex justify-between'>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Админка</h2>
            {/* <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p> */}
          </div>
        </header>
        <Separator className="mt-6" />
      </div>
      <div className="flex flex-row space-x-12 space-y-0">
        {children}
      </div>
    </div>
  )
}