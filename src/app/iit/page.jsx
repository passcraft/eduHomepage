import { ProgramHero } from '@/components/ProgramHero'
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramPricing } from '@/components/ProgramPricing'
import matter from 'gray-matter'
import { getItemData, getAllItems } from '@/lib/getItems'
import { CallToAction } from '@/components/CallToAction'
export async function generateMetadata() {
  return {
    title: `Sarat Chandra IIT Academy`,
    description: `Sarat Chandra IIT Academy is a premier coaching institute that provides comprehensive training for IIT JEE, EAPCET, and other competitive exams.`,
  }
}

export default function ProgramPage() {
  const markdownWithMeta = `---
name: Sarat Chandra IIT Academy
dropdownDescription: Premier coaching institute for IIT JEE, EAPCET, and other competitive exams.
featured: true
hero:
  tagline: Where dreams become reality
  headline: Sarat Chandra IIT Academy
  text: Sarat Chandra IIT Academy is a premier coaching institute that provides comprehensive training for IIT JEE, EAPCET, and other competitive exams.
  video: https://www.youtube.com/embed/LXJ2nhsgmXs?si=QXyNsjzILiVbkM9N
  video_2: https://www.youtube.com/embed/rrk4ciPSPVw?si=3aZuSbZwh6OOE0Ru
  action:
    label: Enroll now
    href: "#"
    icon: true
  image:
    src: "/images/sca/6.jpg"
  form: https://forms.gle/dazdMQSYr1KWuGudA
infoSection:
  headline: Unlock Your Potential
  text: Through our innovative curriculum, expert faculty, and supportive learning environment, we help students unlock their full potential and pave the way for a bright future.
  ages: 5-15
  slides:
    - id: 0
      title: "Empowering Future Innovators"
      description: "Discover how our tailored coaching helps students excel in competitive exams."
      image: "/images/sca/1.jpg"
      active: currentSlide === 0
    - id: 1
      title: "Expert Faculty"
      description: "Learn from the best. Our faculty includes IIT alumni and experienced educators."
      image: "/images/sca/2.jpg"
      active: currentSlide === 1
    - id: 2
      title: "State-of-the-Art Facilities"
      description: "Our modern facilities create the perfect learning environment for our students."
      image: "/images/sca/3.jpg"
      active: currentSlide === 2
    - id: 3
      title: "State-of-the-Art Facilities"
      description: "Our modern facilities create the perfect learning environment for our students."
      image: "/images/iit/iit.jpg"
      active: currentSlide === 3
    - id: 4
      title: "State-of-the-Art Facilities"
      description: "Our modern facilities create the perfect learning environment for our students."
      image: "/images/iit/iit1.jpg"
      active: currentSlide === 4
    - id: 5
      title: "State-of-the-Art Facilities"
      description: "Our modern facilities create the perfect learning environment for our students."
      image: "/images/iit/iit2.jpg"
      active: currentSlide === 5
descriptionSection:
  card_1: 🎓 IIT Madras alumnus as Managing Director
  card_2: 🏫 Only IIT Academy run by IIT B.Tech graduates
  text: >
    ## Our unique approach to education
            
    At Sarat Chandra IIT Academy, we follow a dynamic, interactive, and joyful teaching methodology to ensure stress-free education. Our experienced faculty, including IIT alumni and retired professors, provide personalized attention to each student, focusing on high-scoring topics and fundamentals.
        
    ### What sets us apart

  portraitImage: "/images/sca/5.jpg"
  squareImage1: "/images/img_8.jpeg"
  squareImage2: "/images/img_9.jpeg"
pricingSection:
  tagline: Our Courses
  headline: A program for every aspiring engineer
  text:  Fuel your dreams at Sarat Chandra Academy!! We offer Intermediate courses in MPC, MEC, HEC, and CEC, plus top-notch prep for exams like JEE, EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT. Our rockstar teachers and cutting edge AI-driven teaching methods create a space where you can grow, unleash your potential, and achieve your goals.
  video: https://www.youtube.com/embed/yA7D_odbfv4?si=1SmSL3Ewmt33Amv1
  courses:
    - id: 1
      name: Inter + JEE Mains and Advanced
      price: ₹10,000
      interval: Advance Fee
      shortDescription: Comprehensive coaching for IIT JEE
      features:
        - feature: Expert faculty
        - feature: Personalized attention
      action:
        label: Enroll now
        href: "#"
        icon: true
  
---
`
  const program = matter(markdownWithMeta).data
  console.log('🚀 ~ ProgramPage ~ program:', program)

  return (
    <>
      {program?.hero && (
        <ProgramHero
          name="iit"
          hero={program.hero}
          site="/ias"
          title="IAS"
          site2="/bankssc"
          title2="Bank SSC"
        />
      )}
      {program?.infoSection && (
        <ProgramInformation data={program.infoSection} />
      )}
      {program?.descriptionSection && (
        <ProgramDescription data={program.descriptionSection} />
      )}
      {program?.pricingSection && (
        <ProgramPricing
          name="iit"
          data={program.pricingSection}
          form="https://forms.gle/dazdMQSYr1KWuGudA"
        />
      )}
      <CallToAction
        name="iit"
        title="Enroll Now"
        form="https://forms.gle/dazdMQSYr1KWuGudA"
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
