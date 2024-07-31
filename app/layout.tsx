// export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import './globals.css'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
})

export const metadata: Metadata = {
  title: 'Horizon',
  description: 'Horizon is a modern banking platform for everyone.',
  icons: {
    icon: '/icons/logo.svg',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // if (true) {
  //   console.log('It is true')
  //   await getLoggedInUser()
  // }
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
