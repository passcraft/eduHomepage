import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { basehub } from 'basehub'
import { draftMode, headers } from 'next/headers'
import FooterMail from './FooterMail'
import { Icon } from '@/components/Icon'
import FooterImage from './FooterImage'
const siteLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Parents', href: '/gallery' },
  { label: 'Contact us', href: '/contact' },
]

function SocialLink({ className, href, icon }) {
  return (
    <Link
      className={clsx(
        'flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 duration-300 ease-in-out hover:bg-purple-600',
        className,
      )}
      href={href}
    >
      <Icon icon={icon} className="h-5 w-5 text-white" />
    </Link>
  )
}

export const Footer = async ({ programs, contact }) => {
  // const data = await basehub({
  //   next: { tags: ['basehub'] },
  //   draft: draftMode().isEnabled,
  // }).query({
  //   footer: {
  //     _id: true,
  //     _slug: true,
  //     description: true,
  //     logo: {
  //       alt: true,
  //       aspectRatio: true,
  //       fileName: true,
  //       fileSize: true,
  //       height: true,
  //       lastModified: true,
  //       mimeType: true,
  //       rawUrl: true,
  //     },
  //     address: true,
  //     email: true,
  //     phone: true,
  //   },
  // })
  const header = headers()
  const pathname = header.get('x-invoke-path') || ''
  console.log('pathName:', pathname)
  return (
    <footer className="space-y-8 divide-y divide-purple-400/20 bg-yellow-100 px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      {/* Top section: blocks */}
      <div className="mx-auto flex max-w-md flex-wrap justify-center gap-8 sm:max-w-none lg:max-w-screen-2xl">
        {/* Block 1 */}
        <div className="flex flex-col lg:mx-auto lg:flex-1">
          {/* Logo */}
          <FooterImage />
          {/* 
          <div className="flex justify-center lg:justify-start">
            <div className="w-60"></div>
          </div> */}
          {/* Mission statement */}
          {/* <div className="mt-6 text-lg text-center text-purple-800 lg:text-left">
            Sarat Chandra IIT Academy is a premier coaching institute that
            provides comprehensive training for IIT JEE, EAPCET, and other
            competitive exams.
          </div> */}
          {/* Social links */}
          {/* <div className="mt-5 w-full lg:mt-6">
            <div className="flex justify-center space-x-4 lg:justify-start">
              <SocialLink href="#0" icon="instagram" />
              <SocialLink href="#0" icon="facebook" />
              <SocialLink href="#0" icon="twitter" />
            </div>
          </div> */}
        </div>
        {/* Block 2 */}

        {/* Block 3 */}
        {/* Block 4 */}
        <div className="flex flex-col lg:mx-auto lg:flex-1">
          <h6 className="relative text-center text-xl font-bold tracking-wide text-purple-900 lg:text-left">
            <span className="relative z-20">Contact us</span>
            <span className="absolute -bottom-1 left-0 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500" />
          </h6>
          {/* Contact information */}
          <ul className="mt-6 flex flex-col space-y-5">
            {/* Address */}
            <li className="flex">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 mt-0 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  Benz Circle, Vijayawada; Ashoknagar, Hyderabad
                </p>
              </div>
            </li>
            {/* Email */}
            <li className="flex">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  <FooterMail />
                </p>
              </div>
            </li>
            {/* Phone number */}
            <li className="flex">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
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
      {/* Bottom section */}
      <div className="mx-auto flex max-w-md flex-col justify-between py-8 sm:max-w-none sm:flex-row lg:max-w-screen-2xl">
        {/* Copyright note */}
        <span className="text-base text-purple-800/90">
          © {new Date().getFullYear()} SCA Academy. All rights reserved.
        </span>
        {/* <p className="flex items-center mt-0.5 text-purple-800/90">
          Made with
          <Icon icon="coffee" className="mx-1 w-5 h-5" />
          <span>
            by{' '}
            <Link
              className="text-purple-700 hover:text-purple-900 hover:underline"
              href="https://www.tailwindawesome.com/"
              target="_blank"
            >
              Tailwind Awesome
            </Link>
          </span>
        </p> */}
      </div>
    </footer>
  )
}
