'use client'
import { usePathname } from 'next/navigation'

export default function Address() {
  const pathname = usePathname()
  return (
    <>
      {pathname === '/iit'
        ? 'Benz Circle, Vijayawada; Ashoknagar, Hyderabad'
        : pathname === '/ias'
          ? 'Benz Circle, Vijayawada; Ashoknagar, Hyderabad'
          : pathname === '/judicial'
            ? 'Benz Circle, Vijayawada; Ashoknagar, Hyderabad'
            : 'Benz Circle, Vijayawada'}
    </>
  )
}
