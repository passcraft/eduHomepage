import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import checkmark from '/public/images/illustrations/checkmark.svg'

import { getAllItems } from '@/lib/getItems'

const assurances = [
  'A minimum of 3 years of experience',
  'An advanced degree',
  'Amazing recommendations and positive reviews',
  'A love and passion for teaching and helping children grow and succeed',
  'A commitment to creating a positive classroom experience for all students, no matter their learning needs',
]

export const StaffAssurances = ({title, tagline, body, teacherQualificationTitle}) => {
  const featuredStaff = getAllItems('staff').filter(
    (member) => member.data.featured,
  )

  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 xl:grid-cols-11 xl:gap-24">
          {/* Text content */}
          <div className="flex flex-col justify-center lg:order-2 lg:col-span-1 xl:col-span-6">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                {title}
              </span>
            </div>
            <h2 className="mt-4 text-purple-900 h2 sm:mt-5">
              {tagline}
            </h2>
            <p className="max-w-xl mt-4 text-xl leading-relaxed text-purple-800 md:mt-5">
              {body}
            </p>
            {/* Teacher qualifications box */}
            <div className="relative max-w-4xl mt-16 bg-yellow-100 rounded-xl sm:mt-14">
              <span className="absolute flex items-center justify-center shadow-md -top-7 left-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-600 sm:left-10">
                <Icon icon="certificate" className="w-8 h-8 text-purple-50" />
              </span>
              <div className="px-4 py-10 mt-2 sm:px-10 sm:py-12">
                <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                 {teacherQualificationTitle}
                </p>
                {/* Teacher qualifications list */}
                <ul className="mt-5 space-y-5 text-lg text-purple-800">
                  {assurances.map((assurance, index) => (
                    <li
                      key={`assurance-${index}`}
                      className="flex items-center"
                    >
                      <Image
                        className="flex-shrink-0 mr-3 h-7 w-7"
                        src={checkmark}
                        alt=""
                      />
                      <span>{assurance}</span>
                    </li>
                  ))}
                </ul>
                {/* Link to team section */}
                <Button
                  href="/about#team"
                  variant="accent"
                  size="sm"
                  className="mt-10"
                >
                  Meet the rest of the team
                  <Icon
                    icon="arrowNarrowRight"
                    className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"
                    stroke={2}
                  />
                </Button>
              </div>
            </div>
          </div>
          {/* Featured teachers section */}
          <div className="grid w-full gap-10 mx-auto sm:mx-0 sm:max-w-none sm:grid-cols-2 sm:gap-8 lg:order-1 lg:col-span-1 lg:mt-20 lg:gap-4 xl:col-span-5 xl:gap-8">
            {featuredStaff.map((member, index) => (
              <div
                key={`featured-member-${index}`}
                className={clsx(index % 2 == 0 && 'lg:-translate-y-20')}
              >
                <div className="relative aspect-h-2 aspect-w-3 rounded-3xl bg-yellow-50 sm:aspect-h-4 sm:aspect-w-3">
                  <Image
                    className="absolute inset-0 object-cover w-full h-full shadow-md rounded-3xl"
                    fill
                    src={member.data.portraitImage}
                    sizes="(min-width: 1280px) 15.6rem, (min-width: 1024px) 20.8vw, (min-width: 640px) 17rem, 100vw"
                    alt={member.data.name}
                  />
                </div>
                <div className="mt-3.5 pl-2 text-lg sm:pl-0 sm:text-center">
                  <p className="font-semibold tracking-wide text-purple-800">
                    {member.data.name}
                  </p>
                  <p className="text-base font-medium text-purple-600">
                    {member.data.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
