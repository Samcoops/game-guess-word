'use client';

import HandleGameButton from '@/components/HandleGameButton';
import cookie from 'cookiejs';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

export default function Home() {
    const [isGame, setIsGame] = useState<boolean | undefined>(undefined);

    const el = useRef(null);

    useEffect(() => {
        if (isGame === false) {
            const typed = new Typed(el.current, {
                strings: ['Choose a difficulty', 'to start the Game'],
                typeSpeed: 100,
                loop: true,
                loopCount: Infinity,
            });

            return () => {
                typed.destroy();
            };
        }
    }, [isGame]);

    useEffect(() => {
        const wordIdCookie = cookie.get('word_id');
        if (wordIdCookie) {
            setIsGame(true);
        } else {
            setIsGame(false);
        }
    }, []);

    return (
        <main className='h-[calc(100vh-125px)] w-full flex flex-col justify-center items-center'>
            <div className='text-7xl font-bold absolute top-[300px]'>
                {isGame === false ? <span ref={el} /> : isGame === true ? <span>Game exist</span> : null}
            </div>
            <div className='flex lg:flex-row flex-col'>
                {isGame === false ? (
                    <>
                        <HandleGameButton level='easy' />
                        <HandleGameButton level='medium' />
                        <HandleGameButton level='hard' />
                    </>
                ) : isGame === true ? (
                    <>
                        <Link href={'/game'}>Continue</Link>
                    </>
                ) : null}
            </div>
        </main>
    );
}
