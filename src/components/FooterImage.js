'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '/public/images/logo/Image.png'
import logo_ias from '/public/images/ias/logo_ias.jpg'

export default function FooterImage() {
  const pathname = usePathname()
  return (
    <Link href="/">
      <Image
        src={pathname === '/programs/iit' ? logo : logo_ias}
        alt="Bright"
        className="h-auto"
      />
    </Link>
  )
}
