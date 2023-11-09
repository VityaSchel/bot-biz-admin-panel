'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import cn from 'classnames'
import { buttonVariants } from '@/shared/shadcn/ui/button'
import { Separator } from '@/shared/shadcn/ui/separator'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: ({
    href: string
    title: string
    icon: React.ReactNode
  } | {
    group: true
    title: string
  })[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        'group' in item ? (
          <>
            <Separator className='!my-4' />
            <span className='font-semibold text-sm'>{item.title}</span>
          </>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              pathname === item.href
                ? 'bg-muted hover:bg-muted'
                : 'hover:bg-transparent hover:[&>span]underline',
              '!justify-start'
            )}
          >
            {item.icon}&nbsp;<span className='ml-2'>{item.title}</span>
          </Link>
        )
      ))}
    </nav>
  )
}