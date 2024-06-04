import Image from 'next/image'
import { marked } from 'marked'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import dotsChaos from '/public/images/illustrations/dots-chaos.svg'
import dotsStrip from '/public/images/illustrations/dots-strip.svg'
import dotsPurpleMess from '/public/images/illustrations/dots-purple-mess.svg'

const InfoCard = ({ icon, title, gradientColors, text }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded-2xl px-4 py-6 sm:p-8 sm:py-10 min-w-72 max-w-72',
        gradientColors.bgColor,
      )}
    >
      <span
        className={clsx(
          'flex h-14 w-14 items-center justify-center rounded-2xl shadow-md',
          gradientColors.iconBgColor,
        )}
      >
        <Icon icon={icon} className="w-8 h-8 text-purple-700" />
      </span>
      <h4 className="mt-4 text-xl font-semibold text-center text-purple-900">
        {title}
      </h4>
      <div
        className={clsx(
          'my-2 h-1.5 w-8 rounded-2xl bg-gradient-to-r',
          gradientColors.startColor,
          gradientColors.endColor,
        )}
      />
      <p className="text-lg text-center text-purple-800">{text}</p>
    </div>
  )
}


export const ProgramDescription = ({ data }) => {
  return (
    <section className="overflow-hidden relative">
      {/* Purple background to fill in right gap */}
      <div className="absolute inset-y-0 right-0 ml-auto w-full max-w-screen-xl bg-purple-600 rounded-l-5xl" />
      {/* Background dots decorations */}
      <Image
        src={dotsChaos}
        className="hidden absolute right-0 bottom-0 z-10 w-80 h-auto transform 2xl:block"
        alt=""
      />
      <Image
        src={dotsStrip}
        className="hidden absolute top-1 right-20 z-10 w-36 h-auto transform 2xl:block"
        alt=""
      />
      {/* Main Section */}
      <div className="relative px-4 py-16 w-full bg-purple-600 sm:px-6 sm:py-24 lg:py-0 lg:pr-0 2xl:mx-auto 2xl:max-w-screen-xl 2xl:rounded-l-5xl">
        <div className="grid relative gap-12 lg:grid-cols-2 lg:pr-10 2xl:gap-4 2xl:pr-0">
          <div className="grid relative order-2 grid-cols-2 gap-3 mx-auto w-full max-w-2xl sm:gap-6 lg:order-1 lg:max-w-none lg:py-32">
            <Image
              src={dotsPurpleMess}
              className="hidden absolute top-12 -right-16 transform lg:block 2xl:right-0"
              alt=""
            />
            <div className="relative col-span-2 transform aspect-h-4 aspect-w-3 2xl:-translate-x-16">
              <Image
                src={data.portraitImage}
                fill
                className="object-cover absolute inset-0 w-full h-full rounded-3xl 2xl:rounded-4xl"
                alt="Program description 01"
                sizes="(min-width: 1536px) 38.75rem, (min-width: 1024px) calc(50vw - 3rem), (min-width: 640px) 42rem, calc(100vw - 2rem)"
              />
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="relative aspect-h-1 aspect-w-1">
                <Image
                  src={data.squareImage1}
                  fill
                  className="object-cover absolute inset-0 w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 02"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="relative aspect-h-1 aspect-w-1">
                <Image
                  src={data.squareImage2}
                  fill
                  className="object-cover absolute inset-0 w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 03"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(50vw - 1.75rem)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col order-1 justify-center lg:order-2 lg:py-36">
            <div
              className="relative z-20 mx-auto prose prose-lg prose-invert sm:prose-xl"
              dangerouslySetInnerHTML={{ __html: marked.parse(data.text) }}
            ></div>
            <div className="flex flex-wrap gap-4 justify-center my-8">
              <InfoCard
                icon="moodKid"
                gradientColors={{
                  bgColor: 'bg-yellow-200',
                  iconBgColor: 'bg-yellow-400',
                  startColor: 'from-yellow-400',
                  endColor: 'to-yellow-500',
                }}
                text={'🎓 IIT Madras alumnus as Managing Director'}
              />

              <InfoCard
                icon="calendar"
                gradientColors={{
                  bgColor: 'bg-purple-50',
                  iconBgColor: 'bg-purple-200',
                  startColor: 'from-purple-200',
                  endColor: 'to-purple-300',
                }}
                text={'🏫 Only IIT Academy run by IIT B.Tech graduates'}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
