// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }


import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Sidebar} from '@components'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'EcoConnect',
  description: 'To connect waste collectors and recyclers to create a circular economy.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <div className='flex'>
          <div>
              <Sidebar/>
          </div>

          <div className={'flex-1'}>
              {children}
          </div>

      </div>
      </body>
    </html>
  )
}