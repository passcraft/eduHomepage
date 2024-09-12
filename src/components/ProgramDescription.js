'use client'
import Image from 'next/image'
import { marked } from 'marked'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import dotsChaos from '/public/images/illustrations/dots-chaos.svg'
import dotsStrip from '/public/images/illustrations/dots-strip.svg'
import dotsPurpleMess from '/public/images/illustrations/dots-purple-mess.svg'
import { usePathname } from 'next/navigation'

const InfoCard = ({ icon, title, gradientColors, text }) => {
  return (
    <div
      className={clsx(
        'flex min-w-72 max-w-72 flex-col items-center justify-center rounded-2xl px-4 py-6 sm:p-8 sm:py-10',
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

export const ProgramDescription = ({ data }) => {
  const pathname = usePathname()
  return (
    <section className="relative overflow-hidden">
      {/* Purple background to fill in right gap */}
      <div className="absolute inset-y-0 right-0 ml-auto w-full max-w-screen-xl rounded-l-5xl bg-purple-600" />
      {/* Background dots decorations */}
      <Image
        src={dotsChaos}
        className="absolute bottom-0 right-0 z-10 hidden h-auto w-80 transform 2xl:block"
        alt=""
      />
      <Image
        src={dotsStrip}
        className="absolute right-20 top-1 z-10 hidden h-auto w-36 transform 2xl:block"
        alt=""
      />
      {/* Main Section */}
      <div className="relative w-full bg-purple-600 px-4 py-16 sm:px-6 sm:py-24 lg:py-0 lg:pr-0 2xl:mx-auto 2xl:max-w-screen-xl 2xl:rounded-l-5xl">
        <div className="relative grid gap-12 lg:grid-cols-2 lg:pr-10 2xl:gap-4 2xl:pr-0">
          <div className="relative order-2 mx-auto grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-6 lg:order-1 lg:max-w-none lg:py-32">
            <Image
              src={dotsPurpleMess}
              className="absolute -right-16 top-12 hidden transform lg:block 2xl:right-0"
              alt=""
            />
            <div className="aspect-h-4 aspect-w-3 relative col-span-2 transform 2xl:-translate-x-16">
              <Image
                src={data.portraitImage}
                fill
                className="absolute inset-0 h-full w-full rounded-3xl object-cover 2xl:rounded-4xl"
                alt="Program description 01"
                sizes="(min-width: 1536px) 38.75rem, (min-width: 1024px) calc(50vw - 3rem), (min-width: 640px) 42rem, calc(100vw - 2rem)"
              />
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-h-1 aspect-w-1 relative">
                <Image
                  src={data.squareImage1}
                  fill
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover 2xl:rounded-4xl"
                  alt="Program description 02"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-h-1 aspect-w-1 relative">
                <Image
                  src={data.squareImage2}
                  fill
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover 2xl:rounded-4xl"
                  alt="Program description 03"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(50vw - 1.75rem)"
                />
              </div>
            </div>
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:py-36">
            <div
              className="prose prose-lg prose-invert relative z-20 mx-auto sm:prose-xl"
              dangerouslySetInnerHTML={{ __html: marked.parse(data.text) }}
            ></div>
            <div className="my-8 flex flex-wrap justify-center gap-4">
              {pathname === '/judicial' ? (
                <>
                  <InfoCard
                    icon="moodKid"
                    gradientColors={{
                      bgColor: 'bg-yellow-200',
                      iconBgColor: 'bg-yellow-400',
                      startColor: 'from-yellow-400',
                      endColor: 'to-yellow-500',
                    }}
                    text={data.card_1}
                  />

                  <InfoCard
                    icon="calendar"
                    gradientColors={{
                      bgColor: 'bg-purple-50',
                      iconBgColor: 'bg-purple-200',
                      startColor: 'from-purple-200',
                      endColor: 'to-purple-300',
                    }}
                    text={data.card_2}
                  />
                  <InfoCard
                    icon="calendar"
                    gradientColors={{
                      bgColor: 'bg-purple-50',
                      iconBgColor: 'bg-purple-200',
                      startColor: 'from-purple-200',
                      endColor: 'to-purple-300',
                    }}
                    text={
                      '🎯 Offline classes in Vijayawada. Online classes also available.'
                    }
                  />

                  <InfoCard
                    icon="home"
                    gradientColors={{
                      bgColor: 'bg-green-50',
                      iconBgColor: 'bg-green-200',
                      startColor: 'from-green-100',
                      endColor: 'to-green-300',
                    }}
                    text={
                      '📚 Evening classes suitable to law students and practicing advocates.'
                    }
                  />

                  <InfoCard
                    icon="clock"
                    gradientColors={{
                      bgColor: 'bg-rose-50',
                      iconBgColor: 'bg-rose-200',
                      startColor: 'from-rose-100',
                      endColor: 'to-rose-300',
                    }}
                    text={'👨‍🏫 Teaching as per latest syllabus and new pattern.'}
                  />
                  <InfoCard
                    icon="moodKid"
                    gradientColors={{
                      bgColor: 'bg-yellow-200',
                      iconBgColor: 'bg-yellow-400',
                      startColor: 'from-yellow-400',
                      endColor: 'to-yellow-500',
                    }}
                    text={
                      '📚 Weekly exam practicefor Prelims and Mains. Interview Guidance by Judges'
                    }
                  />
                  <InfoCard
                    icon="home"
                    gradientColors={{
                      bgColor: 'bg-green-50',
                      iconBgColor: 'bg-green-200',
                      startColor: 'from-green-100',
                      endColor: 'to-green-300',
                    }}
                    text={
                      '📚 Personal mentorship and guidance to every student'
                    }
                  />
                </>
              ) : (
                <>
                  <InfoCard
                    icon="moodKid"
                    gradientColors={{
                      bgColor: 'bg-yellow-200',
                      iconBgColor: 'bg-yellow-400',
                      startColor: 'from-yellow-400',
                      endColor: 'to-yellow-500',
                    }}
                    text={data.card_1}
                  />

                  <InfoCard
                    icon="calendar"
                    gradientColors={{
                      bgColor: 'bg-purple-50',
                      iconBgColor: 'bg-purple-200',
                      startColor: 'from-purple-200',
                      endColor: 'to-purple-300',
                    }}
                    text={data.card_2}
                  />
                  <InfoCard
                    icon="calendar"
                    gradientColors={{
                      bgColor: 'bg-purple-50',
                      iconBgColor: 'bg-purple-200',
                      startColor: 'from-purple-200',
                      endColor: 'to-purple-300',
                    }}
                    text={'🎯 Focus on high-scoring topics and fundamentals'}
                  />

                  <InfoCard
                    icon="clock"
                    gradientColors={{
                      bgColor: 'bg-rose-50',
                      iconBgColor: 'bg-rose-200',
                      startColor: 'from-rose-100',
                      endColor: 'to-rose-300',
                    }}
                    text={'👨‍🏫 Experienced faculty with proven track records'}
                  />
                  <InfoCard
                    icon="moodKid"
                    gradientColors={{
                      bgColor: 'bg-yellow-200',
                      iconBgColor: 'bg-yellow-400',
                      startColor: 'from-yellow-400',
                      endColor: 'to-yellow-500',
                    }}
                    text={
                      '📚 Study materials, assignments, and exam papers prepared by IITians'
                    }
                  />
                  <InfoCard
                    icon="home"
                    gradientColors={{
                      bgColor: 'bg-green-50',
                      iconBgColor: 'bg-green-200',
                      startColor: 'from-green-100',
                      endColor: 'to-green-300',
                    }}
                    text={
                      '🏘️ Separate campuses for boys and girls with hostels and hygienic food'
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
