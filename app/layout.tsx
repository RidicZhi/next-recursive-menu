import type { Metadata } from 'next'
import '@/styles/globals.css'

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
          {children}
        </div>
      </body>
    </html>
  )
}
