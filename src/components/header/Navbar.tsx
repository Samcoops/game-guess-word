import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-[125px] flex justify-center items-center absolute bg-[#020C1A]'>
      <Link href={'/'}>
        <div className='text-4xl text-white text-center'>THE WORDGUESSR GAME</div>
      </Link>
    </div>
  )
}
