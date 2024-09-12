import { ProgramHero } from '@/components/ProgramHero'
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramPricing } from '@/components/ProgramPricing'
import { CallToAction } from '@/components/CallToAction'

import matter from 'gray-matter'

import { getItemData, getAllItems } from '@/lib/getItems'

export async function generateMetadata() {
  return {
    title: `Sarat Chandra Judicial`,
    description: `Sarat Chandra Judicial Academy is a premier coaching institute that provides comprehensive training for Junior Civil Judge and Assistant public prosecutor aspirants.  Equal focus on Prelims, Mains and Interview. Practice Tests on Prelims and writing practice for Mains as per latest syllabus and exam pattern. Interview Guidance by Judges.`,
  }
}

export default function ProgramPage() {
  const metadata = `---
name: Sarat Chandra Judicial Academy
dropdownDescription: Sarat Chandra Judicial Academy is a premier coaching institute that provides comprehensive training for Junior Civil Judge and Assistant public prosecutor aspirants.  Equal focus on Prelims, Mains and Interview. Practice Tests on Prelims and writing practice for Mains as per latest syllabus and exam pattern. Interview Guidance by Judges.
featured: true
hero:
  tagline: Where dreams become reality
  headline: Sarat Chandra Judicial Academy
  text: Sarat Chandra Judicial Academy is a premier coaching institute that provides comprehensive training for Junior Civil Judge and Assistant public prosecutor aspirants.  Equal focus on Prelims, Mains and Interview. Practice Tests on Prelims and writing practice for Mains as per latest syllabus and exam pattern. Interview Guidance by Judges.
  video: https://www.youtube.com/embed/Rjh271wFMqA?si=FP8MkTla99NsRbPq
  action:
    label1: Enroll Now
    href: "https://wa.me/7386321500"
    icon: true
  image:
    src: "/images/sca/6.jpg"
  form: https://forms.gle/x2RD6rnVAhTZLcBR6
infoSection:
  headline: Unlock Your Potential
  text: Through our innovative curriculum, expert faculty, and supportive learning environment, we help students unlock their full potential and pave the way for a bright future.
  ages: 15 and above
  slides:
    - id: 0
      title: "Empowering Future Innovators"
      description: "Discover how our tailored coaching helps students excel in competitive exams."
      image: "/images/ias/ias_4.jpg"
      active: currentSlide === 0
    - id: 1
      title: "Expert Faculty"
      description: "Learn from the best. Our faculty includes experienced educators and high court advocates."
      image: "/images/ias/ias_2.jpg"
      active: currentSlide === 1
    - id: 2
      title: "State-of-the-Art Facilities"
      description: "Our modern facilities create the perfect learning environment for our students."
      image: "/images/ias/ias_3.jpg"
      active: currentSlide === 2
    - id: 3
      title: "Top Rankers"
      description: "Our top-notch faculty and mentorship program helps students excel in the exams."
      image: "/images/ias/ias_1.jpg"
      active: currentSlide === 3
descriptionSection:
  card_1: 🎓 A product of Sarat Chandra IAS Academy run by the director who produced 160+ IAS Ranks. He cleared several national exams
  card_2: 🏫 Only Judicial Academy run by High court Advocates and retired Judges
  text: >
    ## Our unique approach to education
 
    At Sarat Chandra Judicial Academy, we follow a dynamic, interactive, and practical teaching methodology to ensure stress-free yet effective education. Our experienced faculty, including Advocates of High Court, Retired Judges, provide personalized attention to each student, focusing on high-scoring topics and fundamental concepts.
 
    ### What sets us apart
 
    - **Expert Faculty & Mentorship:** Learn from experienced educators and high court advocates.
  
    - **Comprehensive Courses:** From integrated degree programs to specialized coaching for various competitive exams.
  
    - **Innovative Resources:** Access free resources, including topper interviews, online coaching, and daily current affairs updates.
  portraitImage: "/images/sca/5.jpg"
  squareImage1: "/images/img_8.jpeg"
  squareImage2: "/images/img_9.jpeg"
pricingSection:
  tagline: Our Courses
  headline: A program for every aspiring Judge and Public Prosecutor
  text: Fuel your dreams at Sarat Chandra Judicial Academy! We offer a range of courses designed to cater to the diverse needs of students. Our top-notch faculty and cutting-edge teaching methods create a supportive environment where you can grow, excel, and achieve your dreams.
  video_end: https://www.youtube.com/embed/auih982vrZU?si=3Mvr3TtxRQwZpEwq
  video_end2: https://www.youtube.com/embed/dRRIwgvJaoU?si=Ls8zIPF3aDEOUEMB
  courses:
    - id: 1
      name: Coaching for Junior civil Judge or Assistant public prosecutor 
      shortDescription: Comprehensive coaching for Junior Civil Judge and Assistant Public Prosecutor exams, focusing on legal concepts, case law, and exam-specific strategies.
      features:
        - feature: Expert faculty
        - feature: Personalised attention
        
      action:
        label: Enroll now
        href: "https://wa.me/7386321500"
        icon: true
   
    
  
---
`
  const program = matter(metadata).data

  return (
    <>
      {program?.hero && (
        <ProgramHero
          name="judicial"
          hero={program.hero}
          site="/iit"
          title="IIT"
          site2="/ias"
          title2="IAS"
          site3="/bankssc"
          title3="Bank SSC"
        />
      )}

      {program?.infoSection && (
        <ProgramInformation data={program.infoSection} />
      )}
      {program?.descriptionSection && (
        <ProgramDescription data={program.descriptionSection} />
      )}
      {program?.pricingSection && (
        <ProgramPricing name="judicial" data={program.pricingSection} />
      )}
      <CallToAction
        name="judicial"
        title="Enroll Now"
        form="https://wa.me/7386321500"
      />
    </>
  )
}

export async function generateStaticParams() {
  const programs = getAllItems('programs')

  const paths = programs.map((program) => ({
    slug: program.slug,
  }))

  return paths
}

export const dynamicParams = false
