import { HomeHero } from '@/components/HomeHero'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { StaffAssurances } from '@/components/StaffAssurances'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { basehub } from 'basehub'
import { getAllItems } from '@/lib/getItems'
import { draftMode } from 'next/headers'

export const metadata = {
  title: 'Bright - Creating a brighter future for your child',
  description:
    'At Bright School, we believe every child deserves a brighter future. and strive to give every student a personalized education that will promote their individual strengths and creativity.',
}

export default async function HomePage() {
  const faqs = getAllItems('faqs')
  const heroData = await basehub({
    next: { tags: ['basehub'] },
    draft: draftMode().isEnabled,
  }).query({
    hero: {
      _id: true,
      _slug: true,
      _title: true,
      rating: true,
      subtitle: true,
      tagline: true,
      title: true,
      videoLink: true,
      heroImage: {
        alt: true,
        aspectRatio: true,
        fileName: true,
        fileSize: true,
        height: true,
        lastModified: true,
        mimeType: true,
        rawUrl: true,
      },
      rating: true,
      ratingLabelOne: true,
      ratingLabelThree: true,
      ratingLabelTwo: true,
      ratingStarOne: true,
      ratingStarTwo: true,
      ratingStarThree: true,
      
    },
  })
  
  const fetaureBlocks = await basehub({
    next: { tags: ['basehub'] },
    draft: draftMode().isEnabled,
  }).query({
    heroFeatures: {
      _id: true,
      _slug: true,
      title: true,
      subtitle: true,
      features: {
       
        items: {
          name: true,
        },
      },
    },
  })

  const staffAssurance = await basehub({
    next: { tags: ['basehub'] },
    draft: draftMode().isEnabled,
  }).query({
    staffAssurances: {
      _id: true,
      _slug: true,
      title: true,
      tagline: true,
      body: true,
      teacherQualificationTitle: true
    },
  })

  const data = await basehub({
    next: { tags: ['basehub'] },
    draft: draftMode().isEnabled,
  }).query({
    featuredPrograms: {
      _id: true,
      _slug: true,
      title: true,
      subtitle: true,
    },
    testimonials: {
      title: true,
      subtitle: true
    }
  })


  return (
    <>
      <HomeHero {...heroData.hero} />
      {/* Gradient background transition */}
      <div className="w-full h-40 bg-gradient-to-b from-purple-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks {...fetaureBlocks.heroFeatures} />
      <StaffAssurances {...staffAssurance.staffAssurances}/>
      <FeaturedPrograms {...data.featuredPrograms}/>
      <Testimonials {...data.testimonials}/>
      <Faqs faqs={faqs} />
    </>
  )
}
