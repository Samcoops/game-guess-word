import { iWord, tGameLevel } from '@/types';

import db from '@/lib/db.json';

export function handleGame(level: tGameLevel): iWord {
    // const words = db.map((word) => word);
    const words = (db as iWord[]).map((word) => ({
        id: word.id,
        word: word.word,
        hints: word.hints,
        keywords: word.keywords,
        level: word.level,
    }));

    const targetWords = words.filter((word) => word.level === level);

    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const selectedWord = targetWords[getRandomInt(0, targetWords.length)];

    return selectedWord;
}
