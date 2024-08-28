import Image from 'next/image'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'

export const ProgramHero = ({ name, hero, site, title, site2, title2 }) => {
  // <section className="relative bg-gradient-to-b from-purple-25 to-purple-50 px-4 pt-16 sm:px-6 lg:px-8">
  //   <div className="mx-auto max-w-screen-xl">
  //     {/* Header */}
  //     <div className="relative">
  //       <div className="mr-2 flex justify-center">
  //         <Button href={site} className="top-[-40px] mr-4">
  //           Click here for {title} website
  //         </Button>
  //         <Button href={site2} className="top-[-40px]">
  //           Click here for {title2} website
  //         </Button>
  //       </div>
  //       <div className="flex justify-center">
  //         <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
  //           {hero.tagline}
  //         </span>
  //       </div>
  //       <h2 className="h1 mx-auto mt-4 max-w-3xl text-center text-purple-900">
  //         {hero.headline}
  //       </h2>
  //       <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5">
  //         {hero.text}
  //       </p>
  //       {/* CTA button */}
  //       <div className="mt-8 flex justify-center">
  //         <Button href={hero.form} className={'text-wrap text-center'}>
  //           {hero.action.label}
  //           {hero.action.icon && (
  //             <Icon
  //               icon="arrowNarrowRight"
  //               className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
  //               stroke={2}
  //             />
  //           )}
  //         </Button>
  //       </div>
  //     </div>
  //     {/* Hero image */}
  //     {/* <div className="relative z-10 mt-14 sm:mt-16">
  //       <div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
  //         <Image
  //           className="object-cover absolute inset-0 w-full h-full rounded-3xl shadow-xl"
  //           src={hero.image.src}
  //           fill
  //           priority
  //           sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
  //           alt={hero.headline}
  //         />
  //       </div>
  //     </div> */}
  //     <div className="relative z-10 mt-14 sm:mt-16">
  //       <div className="aspect-h-2 aspect-w-3 relative sm:aspect-h-9 sm:aspect-w-16">
  //         <iframe
  //           width="560"
  //           height="315"
  //           src={hero.video}
  //           title="YouTube video player"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           referrerPolicy="strict-origin-when-cross-origin"
  //           allowFullScreen
  //           className="absolute inset-0 h-full w-full rounded-3xl shadow-xl"
  //         ></iframe>
  //       </div>
  //     </div>
  //     {hero.video_2 && (
  //       <div className="relative z-10 mt-14 sm:mt-16">
  //         <div className="aspect-h-2 aspect-w-3 relative sm:aspect-h-9 sm:aspect-w-16">
  //           <iframe
  //             width="560"
  //             height="315"
  //             src={hero.video_2}
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //             referrerPolicy="strict-origin-when-cross-origin"
  //             allowFullScreen
  //             className="absolute inset-0 h-full w-full rounded-3xl shadow-xl"
  //           ></iframe>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  //   {/* Background overlay effect */}
  //   <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-64 bg-white sm:block" />
  // </section>
  return (
    <>
      {name === 'bank' ? (
        <section className="relative bg-gradient-to-b from-purple-25 to-purple-50 px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl">
            {/* Header */}
            <div className="relative">
              <div className="mr-2 flex flex-col items-center justify-center sm:flex-row">
                <Button
                  href={site}
                  className="top-[-40px] mb-2 sm:mb-0 sm:mr-4"
                >
                  Click here for {title} website
                </Button>
                <Button href={site2} className="top-[-40px]">
                  Click here for {title2} website
                </Button>
              </div>
              <div className="flex justify-center">
                <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                  {hero.tagline}
                </span>
              </div>
              <h2 className="h1 mx-auto mt-4 max-w-3xl text-center text-purple-900">
                {hero.headline}
              </h2>
              <p className="mx-auto mb-4 mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5">
                {hero.text}
              </p>
              {/* CTA button */}
              <div className="mt-8 flex flex-col items-center justify-center sm:flex-row">
                <Button
                  href={hero.form1}
                  className={'mb-2 text-wrap text-center sm:mb-0 sm:mr-4'}
                >
                  {hero.action.label1}
                  {hero.action.icon && (
                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  )}
                </Button>
                <Button href={hero.form2} className={'text-wrap text-center'}>
                  {hero.action.label2}
                  {hero.action.icon && (
                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  )}
                </Button>
              </div>
            </div>
            {/* Hero video */}
            <div className="relative z-10 mt-14 sm:mt-16">
              <div className="aspect-h-[0.5] aspect-w-3 relative sm:aspect-w-16">
                {/* <iframe
                  width="560"
                  height="315"
                  src={hero.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-3xl shadow-xl"
                ></iframe> */}
              </div>
            </div>
            {/* {hero.video_2 && (
                <div className="relative z-10 mt-14 sm:mt-16">
                  <div className="aspect-h-2 aspect-w-3 relative sm:aspect-h-9 sm:aspect-w-16">
                    <iframe
                      width="560"
                      height="315"
                      src={hero.video_2}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full rounded-3xl shadow-xl"
                    ></iframe>
                  </div>
                </div>
              )} */}
          </div>
          {/* Background overlay effect */}
          <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-1 bg-white sm:block" />
        </section>
      ) : (
        <section className="relative bg-gradient-to-b from-purple-25 to-purple-50 px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl">
            {/* Header */}
            <div className="relative">
              <div className="flex justify-center">
                <Button
                  href={
                    'https://www.dropbox.com/scl/fi/tufrxmld1tbrlgc8kovx0/Sarath-IAS-UPSC-2024-Set-D-Key-and-explanation.pdf?rlkey=x6b09ssl08o3xqnplfqftdvnp&dl=1'
                  }
                  className="top-[-40px]"
                >
                  UPSC Civils 2024 Prelims Paper 1 Answer key with detailed
                  explanation
                </Button>
              </div>
              <div className="mr-2 mt-8 flex flex-col items-center justify-center sm:flex-row">
                <Button
                  href={site}
                  className="top-[-40px] mb-2 sm:mb-0 sm:mr-4"
                >
                  Click here for {title} website
                </Button>
                <Button href={site2} className="top-[-40px]">
                  Click here for {title2} website
                </Button>
              </div>
              <div className="flex justify-center">
                <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                  {hero.tagline}
                </span>
              </div>
              <h2 className="h1 mx-auto mt-4 max-w-3xl text-center text-purple-900">
                {hero.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5">
                {hero.text}
              </p>
              {/* CTA button */}
              <div className="mt-8 flex justify-center">
                <Button href={hero.form} className={'text-wrap text-center'}>
                  {hero.action.label}
                  {hero.action.icon && (
                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
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
              className="object-cover absolute inset-0 w-full h-full rounded-3xl shadow-xl"
              src={hero.image.src}
              fill
              priority
              sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              alt={hero.headline}
            />
          </div>
        </div> */}
            <div className="relative z-10 mt-14 sm:mt-16">
              <div className="aspect-h-2 aspect-w-3 relative sm:aspect-h-9 sm:aspect-w-16">
                <iframe
                  width="560"
                  height="315"
                  src={hero.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-3xl shadow-xl"
                ></iframe>
              </div>
            </div>
            {hero.video_2 && (
              <div className="relative z-10 mt-14 sm:mt-16">
                <div className="aspect-h-2 aspect-w-3 relative sm:aspect-h-9 sm:aspect-w-16">
                  <iframe
                    width="560"
                    height="315"
                    src={hero.video_2}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full rounded-3xl shadow-xl"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          {/* Background overlay effect */}
          <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-64 bg-white sm:block" />
        </section>
      )}
    </>
  )
}
