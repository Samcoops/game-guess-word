'use client';

import { useEffect, useState } from 'react';
import cookie from 'cookiejs';

import db from '@/lib/db.json';
import { iWord } from '@/types';

export default function GamePage() {
    const words = (db as iWord[]).map((word) => ({
        id: word.id,
        word: word.word,
        hints: word.hints,
        keywords: word.keywords,
        level: word.level,
    }));

    const [isGame, setIsGame] = useState<boolean | undefined>(undefined);
    const [wordId, setWordId] = useState<number | undefined>(undefined);
    const [word, setWord] = useState<iWord | undefined>(undefined);

    useEffect(() => {
        const wordIdCookie = cookie.get('word_id');
        if (wordIdCookie) {
            setWordId(parseInt(wordIdCookie.toString()));
        } else {
            setIsGame(false);
        }
    }, []);

    useEffect(() => {
        if (wordId || wordId === 0) {
            const wordById = words.find((word) => word.id === wordId);
            if (wordById) {
                setWord(wordById);
            } else {
                setIsGame(false);
            }
        }
    }, [wordId]);

    useEffect(() => {
        if (word) {
            setIsGame(true);
            console.log(word);
        }
    }, [word]);

    if (isGame === undefined) {
        return null;
    }

    if (!isGame) return <span>No game found</span>;

    return (
        <>
            {isGame && (
                <div>
                    <div className='absolute top-[150px] md:top-[200px] lg:top-[300px] rounded-r-3xl h-[75px] w-[400px] text-3xl flex items-center justify-center bg-[#020C1A]'>
                        <span>Game level: {word?.level}</span>
                        <span>Word: {word?.word}</span>
                    </div>
                </div>
            )}
        </>
    );
}
