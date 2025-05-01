import type { Metadata } from 'next'
import { Inter, Staatliches } from 'next/font/google'
import './styles.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const staatliches = Staatliches({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-staatliches'
})

export const metadata: Metadata = {
  title: 'ANKI Co - Sustainable Container Homes',
  description: 'Transform your living space with eco-friendly, affordable, and sustainable container homes. Custom designs, quality craftsmanship, and innovative solutions.',
  keywords: 'container homes, sustainable living, eco-friendly homes, custom container homes, ANKI Co',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${staatliches.variable}`}>
      <body className="bg-dark-bg text-light-text">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
