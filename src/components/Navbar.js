'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Menu, Transition, Popover } from '@headlessui/react'
import clsx from 'clsx'

import logo from '/public/images/bright-logo.png'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Parents', href: '/parents' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar({ programs }) {
  const pathname = usePathname()

  function MenuIcon({ open }) {
    return (
      <>
        <span
          className={clsx(
            'block absolute h-1 rounded-full opacity-100 transition-all duration-300 ease-in-out transform rotate-0',
            open
              ? 'top-2 left-1/2 w-0 bg-purple-50 group-hover:bg-white'
              : 'top-0 left-0 w-full bg-purple-900 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'block absolute left-0 top-2 w-full h-1 rounded-full opacity-100 transition-all duration-300 ease-in-out transform group-hover:bg-purple-600',
            open
              ? 'bg-purple-50 rotate-45 group-hover:bg-white'
              : 'bg-purple-900 rotate-0 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'block absolute left-0 top-2 w-full h-1 rounded-full opacity-100 transition-all duration-300 ease-in-out transform group-hover:bg-purple-600',
            open
              ? 'bg-purple-50 -rotate-45 group-hover:bg-white'
              : 'bg-purple-900 rotate-0 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'block absolute h-1 rounded-full opacity-100 transition-all duration-300 ease-in-out transform rotate-0 group-hover:bg-purple-600',
            open
              ? 'top-2 left-1/2 w-0 bg-purple-50 group-hover:bg-white'
              : 'left-0 top-4 w-full bg-purple-900 group-hover:bg-purple-600',
          )}
        />
      </>
    )
  }

  function MobileNav() {
    return (
      <div className="block lg:hidden">
        <Popover>
          <Popover.Button
            className="relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MenuIcon open={open} />}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Popover.Panel
              as="div"
              className="overflow-y-scroll absolute inset-x-0 top-0 z-40 px-4 py-16 w-screen bg-gradient-to-tr from-purple-600 to-purple-600 sm:px-8"
            >
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="mx-auto w-full max-w-md">
                  <p className="text-lg font-semibold tracking-wider text-center text-purple-200 uppercase sm:text-left">
                    Contact Details
                  </p>
                  <div className="text-center sm:text-left">
                    <p className="mb-4 text-base text-purple-50">
                      Address: Superwizz Rd, Chalasani Nagar, Kanuru,
                      Vijayawada, Andhra Pradesh 520007
                    </p>
                    <p className="mb-4 text-base text-purple-50">
                      Phone: 9494188688 and 9494688188
                    </p>
                    <p className="mb-4 text-base text-purple-50">
                      Email: saratchandraiitacademy@gmail.com
                    </p>
                  </div>
                  <hr className="my-8 w-full border-purple-200 border-opacity-30 sm:my-10" />
                </div>
                <div className="flex flex-col justify-evenly items-center mx-auto space-y-6 w-full">
                  {/* {navigation.map((link) => (
                    <Fragment key={`mobile-link-${link.label}`}>
                      {link.label !== 'Programs' && (
                        <Link href={link.href}>
                          <div className="relative p-0.5 group">
                            <span className="relative z-10 text-2xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                              {link.label}
                            </span>
                            <span className="absolute bottom-0 -right-1 -left-1 h-1.5 bg-yellow-400 rounded-lg duration-300 ease-in-out transform origin-bottom scale-x-0 group-hover:scale-x-100" />
                          </div>
                        </Link>
                      )}
                    </Fragment>
                  ))} */}

                  <Button href="https://forms.gle/dazdMQSYr1KWuGudA">
                    Enroll today
                  </Button>
                </div>

                <hr className="my-8 w-full border-purple-200 border-opacity-30 sm:my-10" />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6">
      <nav className="flex items-center pt-5 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center w-full">
          {/* Main navigation menu for large screens */}
          
          {/* Call to action button */}
          
          {/* Logo on smaller screens: < lg */}
          <div className="block flex-grow-0 flex-shrink-0 w-48 sm:w-52 lg:hidden">
            <Link href="/">
              <Image src={logo} alt="Bright" className="h-auto" />
            </Link>
          </div>

          <MobileNav />
        </div>
      </nav>
    </div>
  )
}