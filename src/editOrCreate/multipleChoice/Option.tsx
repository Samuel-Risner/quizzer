import OptionIsCorrect from "./OptionIsCorrect";

type Props = {
    index: number;
    changeIndex: (currentIndex: number, direction: -1 | 1) => void;

    text: string;
    changeText: (index: number, newText: string) => void;

    isCorrect: boolean;
    changeIsCorrect: (index: number, correct: boolean) => void;
}

export default function Option({ index, changeIndex, text, changeText, isCorrect, changeIsCorrect }: Props) {
    return (
        <div className="h-10 flex flex-row gap-2">
            <input type="text" value={ text } onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { changeText(index, e.currentTarget.value); } } />
            <OptionIsCorrect questionIsCorrect={ isCorrect } changeQuestionIsCorrect={ (correct: boolean) => { changeIsCorrect(index, !isCorrect); } } />
            <button type="button" onClick={ () => { changeIndex(index, -1); } } className="h-full"><img className="h-full" src="assets/questions/multipleChoice/moveUp.svg" alt="Hoch bewegen" /></button>
            <button type="button" onClick={ () => { changeIndex(index, 1); } } className="h-full"><img className="h-full" src="assets/questions/multipleChoice/moveDown.svg" alt="Runter bewegen" /></button>
        </div>
    );
}
