import type { Metadata } from 'next'
import '@/styles/globals.css'
import HeaderNavbar from '@/components/HeaderNavbar'

export const metadata: Metadata = {
  title: 'Dynamic Menu',
  description: 'Dive into Fantastic NextJS'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='app'>
          <HeaderNavbar />
          {children}
        </div>
      </body>
    </html>
  )
}
