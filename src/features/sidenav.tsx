import cn from 'classnames'
import { Button } from '@/shared/shadcn/ui/button'
import { ScrollArea } from '@/shared/shadcn/ui/scroll-area'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Separator } from '@/shared/shadcn/ui/separator'

type SidebarProps = {
  groups: {
    title?: string
    items: {
      href: string
      title: string
      icon: React.ReactNode
    }[]
  }[]
}

export function SidebarNav({ className, groups }: SidebarProps & { className: string }) {
  return (
    <nav className={className}>
      <div className='flex items-stretch gap-4'>
        <div className="space-y-4 flex-1 mt-6">
          {groups.map((group, i) => (
            <div className="pb-2" key={i}>
              {group.title && (
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  {group.title}
                </h2>
              )}
              <div className="space-y-1">
                {group.items.map((item, j) => (
                  <NavItem
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                    key={j}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Separator orientation='vertical' className='h-[inherit] w-px' />
      </div>
    </nav>
  )
}

function NavItem({ href, title, icon }: {
  href: string
  title: string
  icon: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <Link href={href}>
      <Button variant={isActive ? 'secondary' : 'ghost'} className="w-full justify-start text-left flex items-center">
        <span className='mr-2 h-5 w-5 flex items-center'>{icon}</span>
        {title}
      </Button>
    </Link>
  )
}