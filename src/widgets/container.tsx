import { Separator } from '@/shared/shadcn/ui/separator'

export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="space-y-6 px-10 pb-4 md:block">
      <div className='sticky top-0 bg-background z-10 pt-10'>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Админка</h2>
          {/* <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p> */}
        </div>
        <Separator className="my-6" />
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        {children}
      </div>
    </div>
  )
}