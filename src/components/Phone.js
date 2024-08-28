'use client'
import { usePathname } from 'next/navigation'

export default function Address() {
  const pathname = usePathname()
  return (
    <>
      {pathname === '/iit'
        ? '9494188688 and 9494688188'
        : pathname === '/ias'
          ? '9494188688 and 9494688188'
          : '9494188688 and 9492343086'}
    </>
  )
}
