'use client';
import { getWordToGuess } from '@/lib/functions/getWordToGuess';
import { tGameLevel } from '@/types';
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';

export default function Button({ level }: { level: tGameLevel }) {
    const router = useRouter();

    const handleGame = (level: tGameLevel): void => {
        const word = getWordToGuess(level);
        console.log('Game created and added to cookie');

        cookie.set('word_id', word.id.toString());
        cookie.set('hints_count', '0');

        router.push('/game');
    };

    return (
        <div>
            <button
                onClick={() => handleGame(level)}
                className={`flex justify-center items-center w-[200px] h-[50px] text-black bg-white rounded-3xl text-xl mx-10 my-20 transition-all duration-200
                ${
                    level === 'easy'
                        ? 'hover:bg-green-500 hover:text-white'
                        : level === 'medium'
                        ? 'hover:bg-yellow-500 hover:text-white'
                        : level === 'hard'
                        ? 'hover:bg-red-500 hover:text-white'
                        : ''
                }`}
            >
                <span>{level}</span>
            </button>
        </div>
    );
}
