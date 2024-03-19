import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'

const bgColorsClassName = [
  'bg-yellow-200',
  'bg-purple-25',
  'bg-rose-50',
  'bg-blue-50',
]

export const Testimonials = ({title, subtitle}) => {
  const testimonials = getAllItems('testimonials')

  return (
    <section className="py-20 bg-purple-600 sm:py-28 md:-mt-48 lg:py-32">
      {/* Container */}
      <div className="px-4 mx-auto sm:px-6 lg:max-w-screen-2xl">
        {/* Section header title and subheader */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="max-w-2xl text-center text-white h2">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-50">
           {subtitle}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 sm:gap-6 md:mt-14 md:gap-8 lg:mt-16 lg:gap-6 xl:mt-20 xl:grid-cols-4 2xl:mt-24 2xl:gap-12">
          {testimonials.map((item, index) => (
            <blockquote
              key={`testimonial-${index}`}
              className={clsx(
                bgColorsClassName[index % 4],
                'rounded-3xl px-8 py-8 transition duration-300 ease-in-out sm:px-6 md:px-8 lg:px-5 2xl:px-8',
              )}
            >
              <Image
                src={item.data.image}
                width={80}
                height={80}
                className="object-cover w-20 h-20 border-2 border-yellow-300 rounded-full drop-shadow-2xl filter"
                alt={item.data.name}
              />
              <p className="mt-3 text-lg font-bold text-purple-900">
                {item.data.name}
              </p>
              {/* Rating */}
              <div className="flex justify-start w-full mt-1 space-x-1">
                {[...Array(item.data.stars)].map((e, i) => (
                  <Icon
                    key={`${item.data.name}-star-${i}`}
                    icon="starFilled"
                    className="w-5 h-5 text-yellow-500"
                  />
                ))}
              </div>
              <p className="mt-5 text-lg text-purple-800">
                "{item.data.testimonial}"
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
