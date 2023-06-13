import FooterSection from '@/sections/FooterSection'
import './globals.css'

export const metadata = {
  title: 'Portfolio | Aashish Raj Gupta',
  description: 'Portfolio website of Aashish Raj Gupta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
