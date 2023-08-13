export type OptionData = {
    text: string;
    isCorrect: boolean;
}

export type Data = {
    name: string;
    question: string;
    options: OptionData[];
    url?: string;
}
