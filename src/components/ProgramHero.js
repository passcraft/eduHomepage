import Image from 'next/image'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'

export const ProgramHero = ({ hero }) => {
  return (
    <section className="relative px-4 pt-16 bg-gradient-to-b from-purple-25 to-purple-50 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              {hero.tagline}
            </span>
          </div>
          <h2 className="max-w-3xl mx-auto mt-4 text-center text-purple-900 h1">
            {hero.headline}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            {hero.text}
          </p>
          {/* CTA button */}
          <div className="flex justify-center mt-8">
            <Button href={'https://forms.gle/dazdMQSYr1KWuGudA'}>
              {hero.action.label}
              {hero.action.icon && (
                <Icon
                  icon="arrowNarrowRight"
                  className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              )}
            </Button>
          </div>
        </div>
        {/* Hero image */}
        {/* <div className="relative z-10 mt-14 sm:mt-16">
          <div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
            <Image
              className="absolute inset-0 object-cover w-full h-full shadow-xl rounded-3xl"
              src={hero.image.src}
              fill
              priority
              sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              alt={hero.headline}
            />
          </div>
        </div> */}
        <div className="relative z-10 mt-14 sm:mt-16">
          <div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rrk4ciPSPVw?si=LCRIFiHheOZ4DwbZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="absolute inset-0 w-full h-full shadow-xl rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Background overlay effect */}
      <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-64 bg-white sm:block" />
    </section>
  )
}
