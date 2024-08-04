import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-[100px] flex justify-center items-center'>
      <div className='text-4xl text-white'>THE WORDGUESSR GAME</div>
      <Link href={'/game'}>GamePage</Link>
    </div>
  )
}
