import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio web app of Aashish Raj Gupta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>App Logo</div>
        {children}
      </body>
    </html>
  )
}
