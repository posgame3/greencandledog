import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex justify-center items-center my-6">
      <div className="rounded-full neon-border shadow-lg p-2 bg-background" style={{ boxShadow: '0 0 24px #00FF0088' }}>
        <Image
          src="/greencandlestonks.jpg"
          alt="Green Candle Dog Logo"
          width={96}
          height={96}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  )
} 