import Script from 'next/script'

export const GoogleTag = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-345890245" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-345890245');
        `}
      </Script>
    </>
  )
}
