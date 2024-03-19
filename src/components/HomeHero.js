'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import heroImage from '/public/images/stock/hero-home.png'

const ratings = [
  { label: 'Great Schools', stars: 5 },
  { label: 'Private School Review', stars: 5 },
  { label: 'Google Reviews', stars: 5 },
]

export const HomeHero = ({title, subtitle, rating, tagline, videoLink, heroImage, ratingLabelOne, ratingLabelTwo, ratingLabelThree, ratingStarOne, ratingStarTwo, ratingStarThree}) => {
  console.log("🚀 ~ HomeHero ~ subtitle:", subtitle)
  console.log("🚀 ~ HomeHero ~ tagline:", tagline)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <section className="px-4 pt-16 bg-gradient-to-b from-purple-25 to-purple-50 sm:px-6 lg:px-8">
      {/* Hero container */}
      <div
        className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8"
        x-data="{ modalOpen: false }"
      >
        {/* Hero text content */}
        <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-start">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              {title}
            </span>
          </div>
          <h1 className="max-w-xl mt-4 text-center text-purple-900 h1 sm:mt-5 lg:max-w-none lg:text-left">
            {subtitle}
          </h1>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
            {tagline}
          </p>
          {/* Hero buttons */}
          <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
            <Button href="#0">
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
            <Button
              variant="secondary"
              className="mt-6 sm:ml-6 sm:mt-0"
              onClick={() => openModal()}
            >
              <Icon
                icon="playFilled"
                className="mr-3 text-purple-600 duration-300 ease-in-out h-7 w-7 group-hover:text-purple-50"
              />
              Watch video
            </Button>
          </div>
          {/* Social proof */}
          <p className="hidden text-sm font-medium tracking-wider text-purple-900 uppercase mt-14 sm:block lg:hidden xl:block">
            {rating}
            {/* <span className="font-semibold text-purple-600">100 parents</span> */}
          </p>
          <div className="flex-col hidden mt-8 overflow-hidden divide-y divide-purple-400/20 sm:mt-5 sm:flex sm:flex-row sm:divide-x sm:divide-y-0 lg:hidden xl:flex">
            {[
              { label: ratingLabelOne, stars: ratingStarOne },
              { label: ratingLabelTwo, stars: ratingStarTwo },
              { label: ratingLabelThree, stars: ratingStarThree },
            ].map((rating, index) => (
              <div
                key={`primary-${rating.label}`}
                className={clsx(
                  index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                  index == 1 && 'py-5 sm:px-10 sm:py-0',
                  index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                  'flex flex-col items-center',
                )}
              >
                <div className="flex justify-center w-full space-x-1">
                  {[...Array(parseInt(rating.stars))].map((e, i) => (
                    <Icon
                      icon="starFilled"
                      className="w-4 h-4 text-yellow-500"
                      key={`primary-${rating.label}-star-${i}`}
                    />
                  ))}
                </div>
                <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                  {rating.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Hero image & video */}
        <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:col-span-6 lg:mt-0 lg:max-w-none">
          <div className="relative">
            <Image
              src={heroImage.rawUrl}
              priority
              className="w-full h-auto"
              alt={heroImage.alt}
              sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute inline-flex w-20 h-20 bg-purple-400 rounded-full animate-ping opacity-60" />
              {/* Video modal button */}
              <button
                className="relative z-10 flex items-center justify-center w-20 h-20 duration-300 ease-in-out rounded-full outline-none group bg-purple-600/90 hover:bg-purple-600/95"
                onClick={() => openModal()}
              >
                <Icon
                  icon="playFilled"
                  className="w-12 h-12 duration-300 ease-in-out text-white/90 group-hover:text-white/95"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Video modal*/}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear"
            aria-modal="true"
            onClose={closeModal}
          >
            {/* Modal overlay */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-50"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50" />
            </Transition.Child>
            <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
              {/* Modal Content */}
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-24"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-24"
              >
                <Dialog.Panel className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl">
                  <div className="relative aspect-h-9 aspect-w-16">
                    <iframe
                      className="absolute w-full h-full"
                      src={videoLink}
                      title="Video"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowFullScreen
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      {/* Visible only on sm screens ( <= 640px ) and lg screens ( >= 1024px	< 1280px ) */}
      <div className="flex flex-col items-center mt-20 sm:hidden lg:mt-24 lg:flex xl:hidden">
        {/* Social proof */}
        <p className="text-sm font-semibold tracking-wider text-purple-900 uppercase">
          {rating}
        </p>
        <div className="flex flex-col mt-8 overflow-hidden divide-y divide-purple-400/20 sm:flex-row sm:divide-x sm:divide-y-0">
          {[
            { label: 'ratingLabelOne', stars: 'ratingStarOne' },
            { label: 'ratingLabelTwo', stars: 'ratingStarTwo' },
            { label: 'ratingLabelThree', stars: 'ratingStarThree' },
          ].map((rating, index) => (
            <div
              key={`secondary-${rating.label}`}
              className={clsx(
                index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                index == 1 && 'py-5 sm:px-10 sm:py-0',
                index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                'flex flex-col items-center',
              )}
            >
              <div className="flex justify-center w-full space-x-1">
                {[...Array(rating.stars)].map((e, i) => (
                  <Icon
                    icon="starFilled"
                    className="h-4.5 w-4.5 text-yellow-500 lg:h-5 lg:w-5"
                    key={`secondary-${rating.label}-star-${i}`}
                  />
                ))}
              </div>

              <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                {rating.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
