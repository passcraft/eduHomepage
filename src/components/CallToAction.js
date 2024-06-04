import Image from 'next/image'
import { draftMode } from 'next/headers'
import { basehub } from 'basehub'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import sunrise from '/public/images/illustrations/sunrise.svg'
import highlight from '/public/images/illustrations/underline-simple-light-purple.svg'

export  const CallToAction = async () => {
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

  return (
    <section className="py-24 bg-white sm:py-32">
      {/* Container */}
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Sunrise image */}
        <Image className="mx-auto w-72" src={sunrise} alt="" />
        {/* Header */}
        <h2 className="max-w-3xl mx-auto mt-6 text-center text-purple-900 h1">
          <span className="block">Join us for a</span>
          {/* Underlined text */}
          <span className="relative block">
            <span className="relative">
              <Image
                className="absolute inset-0 transform translate-y-9 sm:translate-y-11 xl:translate-y-14"
                src={highlight}
                alt=""
              />
              <span className="relative">{data.calltoaction.spantext}</span>
            </span>
          </span>
        </h2>
        {/* CTA button */}
        <div className="flex justify-center mt-12 xl:mt-14">
          <Button href="https://forms.gle/dazdMQSYr1KWuGudA">
            Enroll today
            <Icon
              icon="arrowNarrowRight"
              className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div>
        <div className="relative z-10 my-14 sm:my-16">
          <div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
            <iframe
              width="600"
              height="450"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.7960424910334!2d80.68961!3d16.485861999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI5JzA5LjEiTiA4MMKwNDEnMjIuNiJF!5e0!3m2!1sen!2sin!4v1711488813481!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full shadow-xl rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
