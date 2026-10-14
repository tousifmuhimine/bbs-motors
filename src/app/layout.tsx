import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BBS Motors | Performance In Motion',
  description: 'Parts, workshop care and wholesale support for riders who keep moving.',
}

/* Google Fonts is loaded from the layout rather than a CSS @import: Tailwind
   v4 bundles globals.css into layered output, where a CSS @import is either
   dropped or ignored by the browser. Preconnects shave a round trip off the
   font load. Long term this belongs in next/font (self-hosted, no shift). */
const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,500;0,600;0,700;0,800;1,800&family=Manrope:wght@400;500;600;700;800&display=swap'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_URL} />
      </head>
      <body>{children}</body>
    </html>
  )
}
