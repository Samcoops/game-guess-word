"use client"
import { handleGame } from '@/lib/functions/handleGame'
import { tGameLevel } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'




export default function Button({text}: {text: tGameLevel}) {
    
    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push("/game")} className='flex justify-center items-center w-[200px] h-[50px] text-black bg-white rounded-3xl text-xl mx-10 my-20'>
                <span>{text}</span>
            </button>
        </div>
    )
}
