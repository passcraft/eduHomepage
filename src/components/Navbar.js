'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Menu, Transition, Popover } from '@headlessui/react'
import clsx from 'clsx'
import FooterMail from './FooterMail'
import Address from './Address'
import Phone from './Phone'

import logo from '/public/images/logo/Image.png'
import logo_ias from '/public/images/ias/logo_ias.jpg'
import logo_bank from '/public/images/banklogo.jpg'
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

export function Navbar() {
  function MenuIcon({ open }) {
    return (
      <>
        <span
          className={clsx(
            'absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out',
            open
              ? 'left-1/2 top-2 w-0 bg-purple-50 group-hover:bg-white'
              : 'left-0 top-0 w-full bg-purple-900 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
            open
              ? 'rotate-45 bg-purple-50 group-hover:bg-white'
              : 'rotate-0 bg-purple-900 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
            open
              ? '-rotate-45 bg-purple-50 group-hover:bg-white'
              : 'rotate-0 bg-purple-900 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
            open
              ? 'left-1/2 top-2 w-0 bg-purple-50 group-hover:bg-white'
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
            className="group relative z-50 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none"
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
              className="absolute inset-x-0 top-0 z-40 w-screen overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 px-4 py-16 sm:px-8"
            >
              <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="mx-auto w-full max-w-md">
                  <p className="text-center text-lg font-semibold uppercase tracking-wider text-purple-200 sm:text-left">
                    Contact Details
                  </p>
                  <div className="text-center sm:text-left">
                    <p className="mb-4 text-base text-purple-50">
                      Address: <Address />
                    </p>
                    <p className="mb-4 text-base text-purple-50">
                      Phone: <Phone />
                    </p>
                    <p className="mb-4 text-base text-purple-50">
                      Email: <FooterMail />
                    </p>
                  </div>
                  <hr className="my-8 w-full border-purple-200 border-opacity-30 sm:my-10" />
                </div>
                <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-6">
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

                  {/* <Button href="https://forms.gle/dazdMQSYr1KWuGudA">
                    Enroll today
                  </Button> */}
                </div>

                <hr className="my-8 w-full border-purple-200 border-opacity-30 sm:my-10" />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    )
  }
  const pathname = usePathname()
  console.log('🚀 ~ Navbar ~ pathname:', pathname)

  return (
    <div className="px-4 sm:px-6">
      <nav className="mx-auto flex max-w-screen-xl items-center pt-5">
        <div className="flex w-full items-center justify-between">
          {/* Main navigation menu for large screens */}

          {/* Call to action button */}

          {/* Logo on smaller screens: < lg */}
          <div className="block w-48 flex-shrink-0 flex-grow-0 sm:w-52 lg:hidden">
            <Link href="/">
              <Image
                src={
                  pathname === '/iit'
                    ? logo
                    : pathname === '/ias'
                      ? logo_ias
                      : logo_bank
                }
                alt="Bright"
                className="h-auto"
              />
            </Link>
          </div>

          <MobileNav />
        </div>
      </nav>
    </div>
  )
}
