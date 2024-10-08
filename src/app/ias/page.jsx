import { ProgramHero } from '@/components/ProgramHero'
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramPricing } from '@/components/ProgramPricing'
import { CallToAction } from '@/components/CallToAction'
import matter from 'gray-matter'

import { getItemData, getAllItems } from '@/lib/getItems'

export async function generateMetadata() {
  return {
    title: `Sarat Chandra IAS`,
    description: `Sarat Chandra IAS is a premier coaching institute that provides comprehensive training for IAS, IIT JEE, EAPCET, and other competitive exams.`,
  }
}

export default function ProgramPage() {
  const metadata = `---
name: Sarat Chandra IAS Academy
dropdownDescription: Premier coaching institute for UPSC Civil Services Examination and other competitive exams.
featured: true
hero:
  tagline: Where dreams become reality
  headline: Sarat Chandra IAS Academy
  text: Sarat Chandra IAS Academy is a premier coaching institute that provides comprehensive training for UPSC Civil Services Examination aspirants.
  video: https://www.youtube.com/embed/Rjh271wFMqA?si=FP8MkTla99NsRbPq
  action:
    label: Mention the course you are interested in
    href: "#"
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
      description: "Learn from the best. Our faculty includes IIT alumni and experienced educators."
      image: "/images/ias/ias_2.jpg"
      active: currentSlide === 1
    - id: 2
      title: "State-of-the-Art Facilities"
      description: "Our modern facilities create the perfect learning environment for our students."
      image: "/images/ias/ias_3.jpg"
      active: currentSlide === 2
    - id: 3
      title: "Top Rankers"
      description: "Our top-notch faculty and mentorship program helps students excel in IAS and IPS."
      image: "/images/ias/ias_1.jpg"
      active: currentSlide === 3
descriptionSection:
  card_1: 🎓 Managing Director guided 160+ IAS Rankers
  card_2: 🏫 Only IAS Academy guided by IAS and IPS officers
  text: >
    ## Our unique approach to education
 
    At Sarat Chandra IAS Academy, we follow a dynamic, interactive, and practical teaching methodology to ensure stress-free yet effective education. Our experienced faculty, including serving IAS and IPS officers, provide personalized attention to each student, focusing on high-scoring topics and fundamental concepts.
 
    ### What sets us apart
 
    - **Expert Faculty & Mentorship:** Learn from experienced educators and serving civil servants.
  
    - **Comprehensive Courses:** From integrated degree programs to specialized coaching for various competitive exams.
  
    - **Innovative Resources:** Access free resources, including topper interviews, online coaching, and daily current affairs updates.
  portraitImage: "/images/sca/5.jpg"
  squareImage1: "/images/img_8.jpeg"
  squareImage2: "/images/img_9.jpeg"
pricingSection:
  tagline: Our Courses
  headline: A program for every aspiring civil servant
  text: Fuel your dreams at Sarat Chandra IAS Academy! We offer a range of courses designed to cater to the diverse needs of UPSC aspirants. Our top-notch faculty and cutting-edge teaching methods create a supportive environment where you can grow, excel, and achieve your dreams.
  video: https://www.youtube.com/embed/vnmhCEdPQmQ?si=dQ2G_GuFwdmKW21h
  video_end: https://www.youtube.com/embed/nlvMJI6rGY8?si=DGEr3rVjVsE7ZFod
  courses:
    - id: 1
      name: Offline Courses in Hyderabad and Vijayawada 
      price: ₹75,000
      interval: Per Year
      shortDescription: We provide best coaching classes, Test series, Material for all subjects, Current Affairs magazines, Personal mentorship to every student. Our team consists of Expert faculty, content developers, research team guided by IAS officers, Rankers and our Managing Director Thota Sarat Chandra who is an expert of General studies and guided more than 160 UPSC Rankers.  
      features:
        - feature: UPSC Civil Services Prelims cum Mains Coaching and Personal Mentorship
        - feature: Test Series - UPSC Civil Services Prelim and Mains - With Answer Key, solutions and detailed explanation, quick evaluation, feedback, All India ranking 
        - feature: Daily and Weekly Mains Answer writing practice for UPSC and Group 1 
        - feature: Daily, weekly, monthly Current Affairs Tests – Prelims and Mains 
        - feature: Monthly Current Affairs Magazines separately for Prelims and Mains 
        - feature: APPSC - Group 1 and Group 2 - Prelims and Mains - Coaching, Crash course, Test series, Personal Guidance 
        - feature: TSPSC Group 1 - Prelims and Mains - Classes, Crash Course, Test series 
        - feature: Personal Guidance for UPSC Civils and Group 1 
      action:
        label: Enroll now
        href: "https://rzp.io/l/PWOHXTvCHa "
        icon: true
    - id: 2
      name: Degree with IAS Coaching
      price: ₹150,000
      interval: Per Year
      shortDescription: An integrated 3-year course combining undergraduate degree programs with IAS coaching.
      features:
        - feature: IAS coaching with degree programs
        - feature: Current affairs & aptitude training
        - feature: Debates & essay competitions
        - feature: Mentorship by IAS/IPS officers
      action:
        label: Enroll now
        href: "#"
        icon: true
    - id: 3
      name: Inter + IAS Coaching + CLAT
      price: ₹100,000
      interval: Per Year
      shortDescription: Intermediate education integrated with IAS foundation coaching and preparation for exams like CLAT.
      features:
        - feature: Intermediate education with IAS coaching
        - feature: Additional classes for CLAT, IPMAT, IIT HSEE
        - feature: Focus on current affairs, reasoning, and writing skills
        - feature: Expert guidance & mentorship
      action:
        label: Enroll now
        href: "#"
        icon: true
    - id: 4
      name: Online courses 
      price: ₹50,000
      interval: Per Year
      shortDescription: We provide best online classes, test series, material, mentorship with expert faculty, research team, content developers, IAS officers and Rankers 
      features:
        - feature: Online Coaching - UPSC Civil Services Prelims cum Mains- Live and Recorded classes 
        - feature: Test Series - UPSC Civil Services Prelim and Mains- With Answer Key, solutions and detailed explanation, quick evaluation, feedback, All India ranking 
        - feature: Daily and Weekly Mains Answer writing practice for UPSC and Group 1 
        - feature: Daily, weekly, monthly Current Affairs Tests – Prelims and Mains 
        - feature: Monthly Current Affairs Magazines separately for Prelims and Mains 
        - feature: APPSC - Group 1 and Group 2 - Prelims and Mains - Coaching and Crash Course 
        - feature: APPSC - Group 1 and Group 2 - Prelims and Mains - Test series 
        - feature: TSPSC Group 1 Online Coaching - Prelims and Mains - Crash Course 
        - feature: TSPSC Group 1 Online Test series - Prelims and Mains 
        
      action:
        label: Enroll now
        href: "https://sarat.courses.store/?filterId=33&sortId=7 "
        icon: true
      
    
  
---
`
  const program = matter(metadata).data

  return (
    <>
      {program?.hero && (
        <ProgramHero
          name="ias"
          hero={program.hero}
          site="/iit"
          title="IIT"
          site2="/bankssc"
          title2="Bank SSC"
          site3="/judicial"
          title3="Judicial"
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
          name="ias"
          data={program.pricingSection}
          form="https://forms.gle/x2RD6rnVAhTZLcBR6"
        />
      )}
      <CallToAction
        name="ias"
        title="Enroll Now"
        form="https://forms.gle/x2RD6rnVAhTZLcBR6"
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
