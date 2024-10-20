import localFont from 'next/font/local'
import './globals.css'

const satoshiVar = localFont({
  src: './fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
  weight: '100 900',
})

export const metadata = {
  title: 'Rudra Bhikadiya',
  description: 'Rudra Bhikadiya is a full-stack developer and a tech enthusiast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${satoshiVar.variable}  antialiased`}>{children}</body>
    </html>
  )
}
