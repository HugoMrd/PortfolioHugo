import './globals.css'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Hugo Mouraud - Portfolio',
  description: 'Développeur Full Stack passionné',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}