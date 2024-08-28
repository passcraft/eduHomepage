import { ProgramHero } from '@/components/ProgramHero'
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramPricing } from '@/components/ProgramPricing'
import { CallToAction } from '@/components/CallToAction'
import matter from 'gray-matter'

import { getItemData, getAllItems } from '@/lib/getItems'

export async function generateMetadata() {
  return {
    title: `Sarat Chandra Bank SSC`,
    description: `Sarat Chandra IAS is a premier coaching institute that provides comprehensive training for IAS, IIT JEE, EAPCET, and other competitive exams.`,
  }
}

export default function ProgramPage() {
  const metadata = `---
name: Sarat Chandra Bank SSC Academy
dropdownDescription: Premier coaching institute for SSC Bank Examination and other competitive exams.
featured: true
hero:
  tagline: Where dreams become reality
  headline: Sarat Chandra Bank SSC Academy
  text: Sarat Chandra SSC Bank Academy is a premier coaching institute that provides comprehensive training for SSC Bank Examination aspirants.
  video: https://www.youtube.com/embed/Rjh271wFMqA?si=FP8MkTla99NsRbPq
  action:
    label1: Enroll here for Online Classes
    label2: Enroll here for Online Practice Tests
    href: "https://forms.gle/BKMLE46EaLpD7eki7"
    icon: true
  image:
    src: "/images/sca/6.jpg"
  form1: https://sarat.courses.store/539519
  form2: https://sarat.courses.store/543606
infoSection:
  headline: Unlock Your Potential
  text: Through our innovative curriculum, expert faculty, and supportive learning environment, we help students unlock their full potential and pave the way for a bright future.
  ages: 15 and above
  slides:
    - id: 0
      title: "Empowering Future Innovators"
      description: "Discover how our tailored coaching helps students excel in competitive exams."
      image: "/images/bankssc/img11.jpg"
      active: currentSlide === 0
    - id: 1
      title: "Expert Faculty"
      description: "Learn from the best. Our faculty includes IIT alumni and experienced educators."
      image: "/images/bankssc/img12.jpg"
      active: currentSlide === 1
    - id: 2
      title: "State-of-the-Art Facilities"
      description: "Our modern facilities create the perfect learning environment for our students."
      image: "/images/bankssc/img13.jpg"
      active: currentSlide === 2

pricingSection:
  tagline: Our Courses
  headline: A program for everyone who aspired to clear exams for Bank, SSC, RRB, Police etc.
  text: Fuel your dream at Sarat Chandra Academy ! We offer a wide range of courses designed to cater to diverse needs of aspirants of SSC CGL, SBI and IBPS PO and Clerk, Police SI and constable, RRB NTPC and group D, NABARD etc. Our top notch faculty and cutting edge teaching methods create a supportive environment where you can grow, excel and achieve your dreams
  video_end: https://www.youtube.com/embed/hlF6beRVpr4?si=6vBTpd05Vq3UmdxH
  video_end2: https://www.youtube.com/embed/qcnqUYGZo1g?si=yAVmEfVj_v0rESsR
  courses:
    - id: 1
      name: About director 
      shortDescription: A distinguished educator with a proven track record of success in multiple competitive exams and a background from IIT Madras.
      features:
        - feature: Graduated with a B.Tech from IIT Madras, one of India's premier engineering institutes.
        - feature: Renowned expert faculty with extensive experience in teaching and mentoring students for competitive exams.
        - feature: Successfully cleared several prestigious exams, including IFS, NDA, SBI PO, RBI, and SSC CGL.
      
    - id: 2
      name: Prepration for various exams
      shortDescription: Expert-led training programs for a wide range of competitive exams across banking, SSC, railways, and other government sectors.
      features:
        - feature: Comprehensive coaching for banking exams, including Bank PO & Clerk (SBI, IBPS, RBI) and RRB.
        - feature: Specialized training for railway exams such as RRB NTPC and Group D.
        - feature: Expert guidance for SSC exams, including SSC CGL and CHSL.
        - feature: Preparation support for various other competitive exams like Police (SI & Constable), NABARD, SEBI, LIC, IRDAI, EPFO, CAPF, FCI, NIACL, LIB, and CDS.
    - id: 3
      name: Classes by Rankers
      shortDescription: Gain insights from top rankers through expert-led sessions covering all essential subjects and current affairs.
      features:
        - feature: In-depth classes on core subjects such as Arithmetic, Advanced Maths, Reasoning, Data Interpretation, and English.
        - feature: Specialized sessions on Current Affairs, Science & Technology, Banking Awareness, Computer Awareness, Economy, and General Knowledge.
        - feature: Focused learning on key areas like Polity, Environment, History, Geography, and Writing skills.
        - feature: Evening classes designed for comprehensive exam preparation, led by experienced rankers.
    - id: 4
      name: Interview Guidance
      shortDescription: Receive expert coaching from seasoned professionals to excel in bank and railway interviews.
      features:
        - feature: Personalized interview preparation led by General Managers from top banks and railways.
        - feature: Expert insights on interview techniques, etiquette, and best practices.
        - feature: Real-world advice and strategies to enhance your confidence and performance during interviews.
    - id: 5
      name: Offline and Online Classes
      shortDescription: Flexible evening classes and daily tests with comprehensive feedback to support both employees and students in their preparation.
      features:
        - feature: Evening classes designed to accommodate both working professionals and students.
        - feature: Daily tests available in both online and offline modes, providing flexibility for all learners.
        - feature: Detailed explanations, feedback, and performance analysis after each test to track progress and improve understanding.
        - feature: Special focus on test preparation from our Vijayawada center, with online support available.
    - id: 5
      name: Study Materials
      shortDescription: Top-tier study resources developed by IIT and IIM alumni to provide in-depth and effective exam preparation.
      features:
        - feature: Premium study material crafted by IIT and IIM alumni, ensuring top-quality content.
        - feature: Comprehensive coverage of all relevant topics and exam patterns.
        - feature: Strategically designed to enhance understanding and improve exam performance.
        - feature: Regular updates and revisions to keep the material current and aligned with exam trends.

  
---
`
  const program = matter(metadata).data

  return (
    <>
      {program?.hero && (
        <ProgramHero
          name="bank"
          hero={program.hero}
          site="/iit"
          title="IIT"
          site2="/ias"
          title2="IAS"
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
          name="bank"
          data={program.pricingSection}
          form="https://forms.gle/BKMLE46EaLpD7eki7"
        />
      )}
      <CallToAction
        name="bank"
        title="Enroll here for Online Classes"
        form="https://sarat.courses.store/539519"
        title2="Enroll here for Online Practice Tests"
        form2="https://sarat.courses.store/543606"
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
