'use client'

import AnimatedSection from './components/AnimatedSection'
import Logo from './components/Logo'

const memeTexts = [
  "He Has Pumped You",
  "It's not FOMO, it's WARNING",
  "HODL Like a Boss",
  "Chart is getting GREEN",
  "You have been BLESSED by $GCD",
  "To the Moon with $GCD",
  "Green Candle Army STRONG",
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <AnimatedSection direction="up">
            <button className="btn-primary text-2xl mb-6">BUY $GCD NOW</button>
          </AnimatedSection>
          <Logo />
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-impact neon-text mb-4">He Has Pumped You</h1>
          </AnimatedSection>
          <AnimatedSection direction="fade" delay={0.2}>
            <p className="text-2xl md:text-3xl mb-2">$GCD, the green candle dog, always has green candle on his head.</p>
            <p className="text-xl md:text-2xl mb-4">It's not FOMO, it's WARNING.</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-lg md:text-xl neon-text mb-2">doghaslong.com</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Meme Texts Section */}
      <section className="py-8 bg-dark-gray">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {memeTexts.map((text, i) => (
            <AnimatedSection key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
              <div className="text-xl md:text-2xl font-impact neon-text px-4 py-2 bg-background rounded-lg shadow">
                {text}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <h2 className="section-title text-center">HOW TO BUY $GCD</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { title: 'DOWNLOAD PHANTOM', desc: 'Download and install Phantom on the appstore, or as a browser extension.' },
              { title: 'SECURE YOUR AVAX', desc: 'Buy AVAX in the PHANTOM APP or deposit from an exchange.' },
              { title: 'BUY SOME $GCD', desc: 'Go to ArenaTrade and swap your AVAX for $GCD.' },
              { title: 'ADD TO YOUR WALLET', desc: 'Import the contract address to view your $GCD.' },
            ].map((step, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.2}
                direction={index % 2 === 0 ? 'up' : 'down'}
                className="p-6 rounded-lg bg-background neon-border text-center"
              >
                <div className="text-2xl font-impact neon-text mb-2">{step.title}</div>
                <div className="text-base text-gray-200">{step.desc}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Greenomics Section */}
      <section id="greenomics" className="py-16 bg-dark-gray">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <h2 className="section-title text-center">GREENOMICS</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'GCD', value: '$GCD' },
              { title: 'TICKER', value: 'GCD' },
              { title: 'SUPPLY', value: '1 BILLION' },
              { title: 'TAX', value: 'NIL' },
              { title: 'REFLECTION', value: '1% to holders' },
              { title: 'LIQUIDITY', value: '50% locked' },
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
                className="p-6 rounded-lg bg-background neon-border text-center"
              >
                <div className="text-xl font-impact neon-text mb-2">{item.title}</div>
                <div className="text-2xl font-bold">{item.value}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chart is getting GREEN Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-impact neon-text mb-4">CHART IS GETTING GREEN</h2>
          </AnimatedSection>
          <AnimatedSection direction="fade" delay={0.2}>
            <p className="text-2xl md:text-3xl mb-2">YOU HAVE BEEN BLESSED BY $GCD</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Socials Section */}
      <section className="py-12 bg-dark-gray">
        <div className="container mx-auto text-center">
          <AnimatedSection direction="up">
            <h2 className="section-title">Join the Green Candle Army!</h2>
          </AnimatedSection>
          <AnimatedSection direction="fade" className="flex justify-center space-x-8 mt-8">
            <a href="#" className="text-4xl hover:text-neon-green transition-colors">🐦</a>
            <a href="#" className="text-4xl hover:text-neon-green transition-colors">💬</a>
            <a href="#" className="text-4xl hover:text-neon-green transition-colors">🎮</a>
          </AnimatedSection>
        </div>
      </section>

      {/* Repeated Logo Section */}
      <section className="py-8">
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          {[...Array(6)].map((_, i) => (
            <Logo key={i} />
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="py-8 text-center text-sm text-gray-400">
        <p>This is a meme coin with no intrinsic value. Not financial advice.</p>
        <p className="mt-2">© 2024 Green Candle Dog. All rights reserved.</p>
      </footer>
    </main>
  )
} 