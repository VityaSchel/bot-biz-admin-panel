import { Separator } from '@/shared/shadcn/ui/separator'

export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Админка</h2>
        {/* <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p> */}
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        {children}
      </div>
    </div>
  )
}