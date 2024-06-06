import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'

export const ProgramPricing = ({ data, form }) => {
  return (
    <section className="relative px-4 py-16 w-full sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="relative z-10 my-14 sm:my-16">
          <div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
            <iframe
              width="560"
              height="315"
              src={data.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-3xl shadow-xl"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {/* Section content */}

          <div className="flex flex-col justify-center pr-10 xl:pr-0">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                {data.tagline}
              </span>
            </div>
            <h2 className="mt-3.5 max-w-xl text-purple-900 h2 sm:mt-4">
              {data.headline}
            </h2>
            <p className="mt-3 max-w-lg text-lg leading-relaxed text-purple-800">
              {data.text}
            </p>
            {/* Contact link */}
            <div className="mt-8 font-medium lg:mt-10">
              <p className="text-purple-800">
                Want to learn more about our programs?
              </p>
              <a
                href={form}
                className="group mt-1.5 flex w-[126px] max-w-full cursor-pointer items-center border-b-2 border-solid border-purple-600 bg-transparent px-0 py-0.5 text-left leading-6 text-purple-600 no-underline transition duration-300 ease-in-out hover:border-purple-400 hover:text-purple-500"
              >
                <span className="text-base font-bold text-left">
                  Get in touch
                </span>
                <Icon
                  icon="arrowNarrowRight"
                  className="ml-3 w-6 h-6 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              </a>
            </div>
          </div>
          {/* Pricing cards */}
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            {data.courses.map((e, i) => (
              <div
                key={`pricing-card-${i}`}
                className={clsx(
                  i == 0 ? 'bg-purple-25' : 'bg-yellow-200',
                  'rounded-xl px-6 py-10 lg:px-5 xl:px-10 lg:max-w-[360px]',
                )}
              >
                <div className="relative">
                  <div className="inline-block relative w-full text-left">
                    <h3 className="relative text-xl font-bold tracking-normal text-purple-900">
                      {e.name}
                    </h3>
                    <div className="mt-2">
                      {/* <h2 className="text-purple-900 h1">
                        {e.price}
                      </h2> */}
                      {/* <div className="mt-3">
                        <div className="inline-block px-3 h-6 text-sm font-medium leading-6 text-purple-700 align-top bg-purple-200 rounded-xl -rotate-1">
                          {e.interval}
                        </div>
                      </div> */}
                      <p className="block mt-6 w-full font-medium text-purple-900">
                        {e.shortDescription}
                      </p>
                    </div>
                    {/* Features */}
                    <ul className="mt-4 space-y-2 text-base">
                      {e.features.map((item, index) => (
                        <li
                          key={`pricing-1-feature-${index}`}
                          className="flex items-center"
                        >
                          <Icon
                            icon="check"
                            className="w-5 h-5 text-purple-600"
                            stroke={2}
                          />

                          <span className="ml-2 text-purple-800">
                            {item.feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    <Button
                      href={'https://rzp.io/l/IkUXWfLWyU'}
                      className="mt-6"
                      variant="accent"
                      size="sm"
                    >
                      {e.action.label}
                      {e.action.icon && (
                        <Icon
                          icon="arrowNarrowRight"
                          className="ml-3 w-5 h-5 group-hover:animate-horizontal-bounce"
                          stroke={2}
                        />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {data.video_end && (
            <div className="relative z-10 my-14 sm:my-16">
              <div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
                <iframe
                  width="560"
                  height="315"
                  src={data.video_end}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-3xl shadow-xl"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
