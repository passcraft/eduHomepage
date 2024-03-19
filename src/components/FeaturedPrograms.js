import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import curvedDottedLine from '/public/images/illustrations/curved-dotted-line.svg'
import loopedDottedLine from '/public/images/illustrations/looped-dotted-line.svg'
import { getAllItems } from '@/lib/getItems'

const ProgramCard = ({ program, index }) => (
  <div
    className={clsx(
      index == 1 &&
        'mt-12 w-full rounded-3xl bg-yellow-200 px-8 py-10 sm:p-12 md:mt-0 md:-translate-y-80 md:px-8 md:py-10 lg:p-12',
      index == 2 &&
        'mt-12 w-full rounded-3xl bg-blue-50 px-8 py-10 sm:p-12 md:col-start-2 md:mt-0 md:-translate-y-80 md:px-8 md:py-10 lg:p-12',
      'relative',
    )}
  >
    {index == 0 && (
      <Image
        src={curvedDottedLine}
        className="absolute top-0 hidden -translate-y-1/2 left-1/2 md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
    <div
      className={clsx(
        index == 0 &&
          'relative z-10 w-full rounded-3xl bg-purple-25 px-8 py-10 sm:p-12 md:px-8 md:py-10 lg:p-12',
      )}
    >
      <div className="flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-purple-900 h3">{program.data.name}</h3>
          <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
            {program.data.hero.text}
          </p>
          <div className="relative mt-8 aspect-h-2 aspect-w-3">
            <Image
              className="absolute inset-0 object-cover rounded-2xl"
              fill
              src={program.data.hero.image.src}
              alt={program.data.name}
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) calc(50vw - 6.5rem), (min-width: 640px) 30rem, calc(100vw - 6rem)"
            />
          </div>
        </div>
        <div className="mt-8">
          <Button href={`/programs/${program.slug}`} variant="accent" size="sm">
            Learn more
            <Icon
              icon="arrowNarrowRight"
              className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div>
      </div>
    </div>
    {index == 0 && (
      <Image
        src={loopedDottedLine}
        className="absolute bottom-0 left-1/2 hidden translate-y-[90%] md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
  </div>
)

export const FeaturedPrograms = ({title,subtitle}) => {
  const featuredPrograms = getAllItems('programs')
    .filter((program) => program.data.featured)
    .slice(0, 3)

  return (
    <section className="px-4 pt-16 pb-24 overflow-hidden sm:px-6 sm:pb-28 sm:pt-24 md:pb-0 lg:px-8">
      {/* Container */}
      <div className="max-w-xl mx-auto md:max-w-screen-xl">
        {/* Section header title and subtext  */}
        <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="max-w-4xl text-purple-900 h2">
              {title}
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-purple-800 sm:mt-5 lg:text-left">
              {subtitle}
            </p>
          </div>
        </div>
        {/* School programs */}
        <div className="mt-16 md:mt-72 md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
          {featuredPrograms.map((program, index) => (
            <ProgramCard
              key={`featured-program-${program.data.name}`}
              program={program}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
