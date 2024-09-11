'use client'
import { usePathname } from 'next/navigation'

export default function FooterMail() {
  const pathname = usePathname()
  return (
    <>
      {pathname === '/iit'
        ? 'saratchandraiitacademy@gmail.com'
        : 'saratchandraiasacademy@gmail.com'}
    </>
  )
}
