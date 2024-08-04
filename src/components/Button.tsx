import React from 'react'

export default function Button({text} : {text: string}) {
  return (
    <div>
        <button className='w-10 h-10 text-black bg-white'>
            <span>{text}</span>
        </button>
    </div>
  )
}
