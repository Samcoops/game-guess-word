export type tGameLevel = 'easy' | 'medium' | 'hard';

export interface iWord {
    id: number;
    word: string;
    hints: string[];
    keywords: string[];
    level: tGameLevel;
}
