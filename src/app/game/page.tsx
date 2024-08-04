'use client';

import { useEffect, useState } from 'react';
import cookie from 'cookiejs';

export default function GamePage() {
    const [isGame, setIsGame] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const game = cookie.get('game');
        console.log(game)
    }, []);

    if (isGame === undefined) {
        return <span>Loading...</span>;
    }

    if (!isGame) return <span>No game found</span>;

    return (
        <>
            {isGame && (
                <div>
                    <div className='absolute top-[150px] md:top-[200px] lg:top-[300px] rounded-r-3xl h-[75px] w-[400px] text-3xl flex items-center justify-center bg-[#020C1A]'>
                        {`Gamelevel : {hard}`}{' '}
                    </div>
                </div>
            )}
        </>
    );
}
