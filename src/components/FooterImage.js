'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '/public/images/logo/Image.png'
import logo_ias from '/public/images/ias/logo_ias.jpg'
import logo_bank from '/public/images/banklogo.jpg'
import logo_judicial from '/public/images/logo_judicial.jpg'

export default function FooterImage() {
  const pathname = usePathname()
  return (
    <>
      <div className="flex justify-center lg:justify-start">
        <div className="w-60">
          <Link href="/">
            <Image
              src={
                pathname === '/iit'
                  ? logo
                  : pathname === '/ias'
                    ? logo_ias
                    : pathname === '/judicial'
                      ? logo_judicial
                      : logo_bank
              }
              alt="Bright"
              className="h-auto"
            />
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-lg text-purple-800 lg:text-left">
        {pathname === '/iit' ? (
          <p>
            Sarat Chandra IIT Academy is a premier coaching institute that
            provides comprehensive training for IIT JEE, EAPCET, and other
            competitive exams.
          </p>
        ) : pathname === '/ias' ? (
          <p>
            Sarat Chandra IAS Academy is a premier coaching institute that
            provides comprehensive training for UPSC Civil Services Examination
            aspirants.
          </p>
        ) : pathname === '/judicial' ? (
          <p>
            Sarat Chandra Bank Judicial Academy is a premier coaching institute
            that provides comprehensive training for all competitive exams
          </p>
        ) : (
          <p>
            Sarat Chandra Bank SSC RRB Academy is a premier coaching institute
            that provides comprehensive training for all competitive exams
          </p>
        )}
      </div>
    </>
  )
}
