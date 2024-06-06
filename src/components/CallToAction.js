import Image from 'next/image'
import { draftMode } from 'next/headers'
import { basehub } from 'basehub'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import sunrise from '/public/images/illustrations/sunrise.svg'
import highlight from '/public/images/illustrations/underline-simple-light-purple.svg'

export const CallToAction = async ({ form }) => {
  const data = await basehub({
    next: { tags: ['basehub'] },
    draft: draftMode().isEnabled,
  }).query({
    calltoaction: {
      _id: true,
      _slug: true,
      title: true,
      spantext: true,
    },
  })
  // const data = []

  return (
    <section className="bg-white py-24 sm:py-32">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Sunrise image */}
        <Image className="mx-auto w-72" src={sunrise} alt="" />
        {/* Header */}
        <h2 className="h1 mx-auto mt-6 max-w-3xl text-center text-purple-900">
          <span className="block">Join us for a</span>
          {/* Underlined text */}
          <span className="relative block">
            <span className="relative">
              <Image
                className="absolute inset-0 translate-y-9 transform sm:translate-y-11 xl:translate-y-14"
                src={highlight}
                alt=""
              />
              {/* <span className="relative">{data.calltoaction.spantext}</span> */}
            </span>
          </span>
        </h2>
        {/* CTA button */}
        <div className="mt-12 flex justify-center xl:mt-14">
          <Button href={form}>
            Enroll today
            <Icon
              icon="arrowNarrowRight"
              className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div>
        <div className="relative z-10 my-14 sm:my-16">
          <div className="aspect-h-2 aspect-w-3 relative sm:aspect-h-9 sm:aspect-w-16">
            <iframe
              width="600"
              height="450"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.7960424910334!2d80.68961!3d16.485861999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI5JzA5LjEiTiA4MMKwNDEnMjIuNiJF!5e0!3m2!1sen!2sin!4v1711488813481!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full rounded-3xl shadow-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
