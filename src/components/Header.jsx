'use client'

import { ContactHeader } from '@/components/ContactHeader'
import { Navbar } from '@/components/Navbar'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export function Header() {
  const pathname = usePathname()
  return (
    <header
      className={clsx(pathname === '/parents' ? 'bg-white' : 'bg-purple-25')}
    >
      <ContactHeader pathname={pathname} />
      <Navbar />
    </header>
  )
}
