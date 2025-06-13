import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Green Candle Dog ($GCD) - The Bullish Meme Coin',
  description: 'Join the Green Candle Army! The most bullish meme coin on the market.',
  keywords: 'Green Candle Dog, GCD, meme coin, cryptocurrency, bullish, AVAX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.className} bg-background text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 