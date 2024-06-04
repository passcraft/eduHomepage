import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/Icon'
import logo from '/public/images/logo/Image.png'
import logo_ias from '/public/images/ias/logo_ias.jpg'


export function ContactHeader({ contact,pathname }) {

  return (
    <div className="hidden px-4 sm:px-6 lg:block">
      {/* Container */}
      <div className="relative py-5 mx-auto max-w-screen-xl border-b border-purple-200/30">
        <div className="flex justify-between items-center">
          {/* Site branding */}
          <div className="flex-grow-0 flex-shrink-0 w-60">
            <Link href="/">
              <Image
                src={pathname === '/iit' ? logo : logo_ias}
                alt="Bright"
                className="h-auto"
              />
            </Link>
          </div>
          {/* Contact information */}
          <ul className="flex ml-8 lg:space-x-6 xl:space-x-16">
            {/* Address */}
            <li className="flex flex-shrink max-w-xs">
              <div>
                <span className="flex justify-center items-center w-11 h-11 bg-yellow-400 rounded-2xl">
                  <Icon icon="mapPin" className="w-6 h-6 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 mt-0 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  Benz Circle, Vijayawada ; Ashoknagar, Hyderabad
                </p>
              </div>
            </li>

            {/* Email */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex justify-center items-center w-11 h-11 bg-purple-200 rounded-2xl">
                  <Icon icon="mail" className="w-6 h-6 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  saratchandraiitacademy@gmail.com
                </p>
              </div>
            </li>

            {/* Phone number */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex justify-center items-center w-11 h-11 bg-rose-200 rounded-2xl">
                  <Icon icon="phone" className="w-6 h-6 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Phone
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  9494188688 and 9494688188
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
