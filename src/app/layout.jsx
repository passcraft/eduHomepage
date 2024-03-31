import '@/styles/tailwind.css'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import Script from 'next/script'
import { getAllItems, getItemData } from '@/lib/getItems'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

// export const metadata = {
//   title: 'Bright School - Creating a brighter future for your child',
//   description:
//     'At Bright School, we believe every child deserves a brighter future. and strive to give every student a personalized education that will promote their individual strengths and creativity.',
// }

export default function RootLayout({ children }) {
  const programs = getAllItems('programs')
  const contact = getItemData('contact', 'global')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <Header programs={programs} contact={contact} />
        {/* <Navbar programs={programs} /> */}
        {children}
        <CallToAction />
      </body>
      <Script
      id='kiwi-script'
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,c,r,a,m){
      w['KiwiObject']=r;
      w[r]=w[r] || function () {
        (w[r].q=w[r].q||[]).push(arguments)};
      w[r].l=1*new Date();
        a=d.createElement(s);
        m=d.getElementsByTagName(s)[0];
      a.async=1;
      a.src=c;
      m.parentNode.insertBefore(a,m)
    })(window,document,'script',"https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v="+ new Date().getTime(),'kiwi');
    window.addEventListener("load",function () {
      kiwi.init('', 'CbLoXArAGZDgDPwDZhWmRS2ETDnI0Mgj', {});
    });
  `
        }}
      />
    </html>
  )
}
