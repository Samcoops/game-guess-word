import { tGameLevel } from '@/types'
import React from 'react'

export default function Button({text}: {text: tGameLevel}) {
  return (
    <div>
        <button className='w-[200px] h-[50px] text-black bg-white rounded-3xl text-xl my-10'>
            <span>{text}</span>
        </button>
    </div>
  )
}
