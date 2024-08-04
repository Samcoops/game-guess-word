'use client';

import HandleGameButton from '@/components/HandleGameButton';
import cookie from 'cookiejs';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

export default function Home() {
    const [isGame, setIsGame] = useState<boolean | undefined>(undefined);

    const el = useRef(null);
    let stringsParam: string[] = isGame ? ['Press the button', 'to continue'] : ['Choose a difficulty', 'to start the Game'];

    useEffect(() => {
      const typed = new Typed(el.current, {
          strings: stringsParam,
          typeSpeed: 100,
          loop: true,
          loopCount: Infinity,
      });

      return () => {
          typed.destroy();
      };
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
        <main className='h-[calc(100vh-125px)] w-full flex flex-col justify-evenly items-center'>
            <div className='text-7xl text-center font-bold px-5 h-[100px]'>
                <span ref={el} />
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
                        <Link className='flex justify-center items-center w-[200px] h-[50px] text-black bg-white rounded-3xl text-xl mx-10 my-10 transition-all duration-200
                        hover:bg-blue-500 hover:text-white' href={'/game'}>Continue</Link>
                    </>
                ) : null}
            </div>
        </main>
    );
}
