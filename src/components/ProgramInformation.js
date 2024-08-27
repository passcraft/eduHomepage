'use client'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const InfoCard = ({ icon, title, gradientColors, text }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded-2xl px-4 py-6 sm:p-8 sm:py-10',
        gradientColors.bgColor,
      )}
    >
      <span
        className={clsx(
          'flex h-14 w-14 items-center justify-center rounded-2xl shadow-md',
          gradientColors.iconBgColor,
        )}
      >
        <Icon icon={icon} className="h-8 w-8 text-purple-700" />
      </span>
      <h4 className="mt-4 text-center text-xl font-semibold text-purple-900">
        {title}
      </h4>
      <div
        className={clsx(
          'my-2 h-1.5 w-8 rounded-2xl bg-gradient-to-r',
          gradientColors.startColor,
          gradientColors.endColor,
        )}
      />
      <p className="text-center text-lg text-purple-800">{text}</p>
    </div>
  )
}

export const ProgramInformation = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Function to navigate to a specific slide
  const handleCarouselSlide = (index) => {
    if (index < 0 || index >= data.slides.length) {
      console.error('Invalid slide index')
      return
    }
    setCurrentSlide(index)
  }

  // Function to go to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + 1
      return nextSlide % data.slides.length
    })
  }

  // Function to go to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const prevIndex = prevSlide - 1
      return prevIndex < 0 ? data.slides.length - 1 : prevIndex
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide() // Call handleNextSlide to move to the next slide
    }, 3000) // Change slide every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [currentSlide, data.slides.length])

  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:pt-32">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        {/* Section header text */}

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="h2 max-w-4xl text-purple-900">{data.headline}</h2>
          </div>
          <div className="mt-6 flex items-center lg:mt-0">
            <p className="text-xl leading-relaxed text-purple-800">
              {data.text}
            </p>
          </div>
        </div>
        <div
          id="default-carousel"
          className="relative mt-16 w-full"
          data-carousel="slide"
        >
          <div className="aspect-h-2 aspect-w-3 relative overflow-hidden rounded-lg sm:aspect-h-9 sm:aspect-w-16">
            {/* Carousel items */}
            {data.slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  visibility: currentSlide === index ? 'visible' : 'hidden',
                }}
                data-carousel-item
              >
                <Image
                  src={slide.image}
                  className="block h-full w-full object-center"
                  alt={`Slide ${index + 1}`}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
          {/* Carousel indicators */}
          {/* <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              className="w-3 h-3 bg-white rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
              onClick={() => handleCarouselSlide(0)}
            ></button>
            <button
              type="button"
              className="w-3 h-3 bg-white rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
              onClick={() => handleCarouselSlide(1)}
            ></button>
          </div> */}
          {/* Carousel controls */}
          <button
            type="button"
            className="absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4"
            data-carousel-prev
            onClick={handlePrevSlide}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4"
            data-carousel-next
            onClick={handleNextSlide}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        {/* Class info */}
        {/* <div className="grid gap-8 mt-12 sm:mt-14 sm:max-w-none sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-4 xl:gap-12">
          <InfoCard
            icon="moodKid"
            title="Ages"
            gradientColors={{
              bgColor: 'bg-yellow-200',
              iconBgColor: 'bg-yellow-400',
              startColor: 'from-yellow-400',
              endColor: 'to-yellow-500',
            }}
            text={data.ages}
          />

          <InfoCard
            icon="calendar"
            title="Dates"
            gradientColors={{
              bgColor: 'bg-purple-50',
              iconBgColor: 'bg-purple-200',
              startColor: 'from-purple-200',
              endColor: 'to-purple-300',
            }}
            text={data.dates}
          />

          <InfoCard
            icon="clock"
            title="Schedule"
            gradientColors={{
              bgColor: 'bg-rose-50',
              iconBgColor: 'bg-rose-200',
              startColor: 'from-rose-100',
              endColor: 'to-rose-300',
            }}
            text={data.schedule}
          />

          <InfoCard
            icon="users"
            title="Class sizes"
            gradientColors={{
              bgColor: 'bg-blue-50',
              iconBgColor: 'bg-blue-200',
              startColor: 'from-blue-100',
              endColor: 'to-blue-300',
            }}
            text={data.classSize}
          />
        </div> */}
      </div>
    </section>
  )
}
