'use client';
import { getWordToGuess } from '@/lib/functions/getWordToGuess';
import { tGameLevel } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Button({ level }: { level: tGameLevel }) {
    const router = useRouter();

    const handleGame = (level: tGameLevel): void => {
        const word = getWordToGuess(level);
        console.log(word);
    };

    return (
        <div>
            <button
                onClick={() => handleGame(level)}
                className='flex justify-center items-center w-[200px] h-[50px] text-black bg-white rounded-3xl text-xl mx-10 my-20'
            >
                <span>{level}</span>
            </button>
        </div>
    );
}
