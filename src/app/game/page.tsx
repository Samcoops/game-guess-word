'use client';

import { useEffect, useState } from 'react';

export default function GamePage() {
    return (
        <div>
            <div className='absolute top-[150px] md:top-[200px] lg:top-[300px] rounded-r-3xl h-[75px] w-[400px] text-3xl flex items-center justify-center bg-[#020C1A]'>
                {`Gamelevel : {hard}`}{' '}
            </div>
        </div>
    );
}
