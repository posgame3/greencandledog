'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'
import AnimatedSection from './components/AnimatedSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-gray/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-impact neon-text">$GCD</div>
          <div className="space-x-6">
            <a href="#how-to-buy" className="hover:text-neon-green transition-colors">How to Buy</a>
            <a href="#tokenomics" className="hover:text-neon-green transition-colors">Tokenomics</a>
            <a href="#community" className="hover:text-neon-green transition-colors">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-6xl md:text-8xl font-impact mb-6 neon-text">
              Green Candle Dog
            </h1>
            <p className="text-2xl md:text-3xl mb-8">Always bullish, always green.</p>
            <button className="btn-primary text-xl">
              Buy $GCD Now
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-20 bg-dark-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">How to Buy</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { title: 'Download Phantom Wallet', icon: '👛' },
              { title: 'Purchase AVAX', icon: '💎' },
              { title: 'Swap AVAX for $GCD', icon: '🔄' },
              { title: 'Add $GCD to Wallet', icon: '✅' },
            ].map((step, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.2}
                className="p-6 rounded-lg bg-background neon-border text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Tokenomics</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Total Supply', value: '1,000,000,000' },
              { title: 'Transaction Tax', value: '0%' },
              { title: 'Liquidity Pool', value: '50% Locked' },
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.2}
                className="p-6 rounded-lg bg-dark-gray neon-border"
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-3xl neon-text">{item.value}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-dark-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Join the Green Candle Army!</h2>
          <AnimatedSection className="flex justify-center space-x-8 mt-12">
            <a href="#" className="text-4xl hover:text-neon-green transition-colors">🐦</a>
            <a href="#" className="text-4xl hover:text-neon-green transition-colors">💬</a>
            <a href="#" className="text-4xl hover:text-neon-green transition-colors">🎮</a>
          </AnimatedSection>
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