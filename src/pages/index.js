import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    </main>
  )
}


// <Image
// src="vercel.svg"
// alt="Vercel Logo"
// className="dark:invert"
// width={100}
// height={24}
// priority
// />