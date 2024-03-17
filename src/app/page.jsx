import { HomeHero } from '@/components/HomeHero'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { StaffAssurances } from '@/components/StaffAssurances'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { basehub } from 'basehub'
import { getAllItems } from '@/lib/getItems'

export const metadata = {
  title: 'Bright - Creating a brighter future for your child',
  description:
    'At Bright School, we believe every child deserves a brighter future. and strive to give every student a personalized education that will promote their individual strengths and creativity.',
}

export default async function HomePage() {
  const faqs = getAllItems('faqs')
  const heroData = await basehub({ cache: 'no-store' }).query({
    hero: {
      _id: true,
      _slug: true,
      _title: true,
      subtitle: true,
      title: true,
    },
  })
    console.log('🚀 ~ heroData ~ heroData:', heroData)

  return (
    <>
      <HomeHero title={heroData.hero.title} subtitle={heroData.hero.subtitle} />
      {/* Gradient background transition */}
      <div className="w-full h-40 bg-gradient-to-b from-purple-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffAssurances />
      <FeaturedPrograms />
      <Testimonials />
      <Faqs faqs={faqs} />
    </>
  )
}
