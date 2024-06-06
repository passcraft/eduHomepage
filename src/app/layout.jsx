import '@/styles/tailwind.css'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import Script from 'next/script'
import matter from 'gray-matter'

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
  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <Header />
        {/* <Navbar programs={programs} /> */}
        {children}

        <Footer />
      </body>
      <Script strategy="lazyOnload" id="whatsapp-script">
        {`
        (function() {
          var whatsappIcon = document.createElement('a');
          whatsappIcon.href = 'https://wa.me/9494188688';
          whatsappIcon.target = '_blank';
          whatsappIcon.style.position = 'fixed';
          whatsappIcon.style.bottom = '20px';
          whatsappIcon.style.right = '20px';
          whatsappIcon.style.zIndex = '1000';
          var whatsappImg = document.createElement('img');
          whatsappImg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
          whatsappImg.style.width = '50px';
          whatsappImg.style.height = '50px';
          whatsappIcon.appendChild(whatsappImg);
          document.body.appendChild(whatsappIcon);
        })();
      `}
      </Script>
    </html>
  )
}
