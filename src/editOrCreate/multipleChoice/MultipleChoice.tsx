import { useState } from "react";
import { useQuery } from "react-query";

import { fetchNamesMultipleChoice } from "../../fetchers";
import Option from "./Option";

type OptionData = {
    text: string;
    isCorrect: boolean;
}

export default function MultipleChoice() {
    const [ currentlyEditing, setCurrentlyEditing ] = useState<boolean>(true);
    const [ optionData, setOptionData ] = useState<OptionData[]>([]);

    const { data, status, refetch } = useQuery("overview", fetchNamesMultipleChoice);

    if (status === "loading") return <div>Bereits vorhandene Namen werden geladen...</div>;
    if ((status === "error") || (data === undefined)) return <div>Die bereits vorhandenen Namen konnten nicht geladen werden!</div>;

    const resetQuestion = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        refetch();

        setCurrentlyEditing(true);
        setOptionData([]);
    }

    const addQuestion = () => {
        optionData.push({ isCorrect: true, text: "" });
        setOptionData(optionData.slice(0));
    }

    const changeIndex = (currentIndex: number, direction: -1 | 1) => {
        if ((currentIndex === 0) && (direction === -1)) return;
        if ((currentIndex === optionData.length - 1) && (direction === 1)) return;

        const textTemp = optionData[currentIndex].text;
        optionData[currentIndex].text = optionData[currentIndex + direction].text;
        optionData[currentIndex + direction].text = textTemp;

        const isCorrectTemp = optionData[currentIndex].isCorrect;
        optionData[currentIndex].isCorrect = optionData[currentIndex + direction].isCorrect;
        optionData[currentIndex + direction].isCorrect = isCorrectTemp;

        setOptionData(optionData.slice(0));
    }

    const changeText = (index: number, newText: string) => {
        optionData[index].text = newText;
        setOptionData(optionData.slice(0));
    }

    const changeIsCorrect = (index: number, correct: boolean) => {
        optionData[index].isCorrect = correct;
        setOptionData(optionData.slice(0));
    }

    const questionDataToSave = {
    }

    return (
        <div>
            <form onSubmit={ resetQuestion } className="flex flex-col gap-2 text-center p-2">
                <button type="submit" className="bg-pink-400 px-2 rounded-lg mx-auto">Zurücksetzen</button>
                { currentlyEditing? <>
                    <button type="button" onClick={ addQuestion } className="bg-pink-400 px-2 rounded-lg mx-auto">Option hinzufügen</button>
                    { optionData.map((value: OptionData, index: number) => <Option key={ index } index={ index } changeIndex={ changeIndex } text={ value.text } changeText={ changeText } isCorrect={ value.isCorrect } changeIsCorrect={ changeIsCorrect } />)}
                </> : <></> }
            </form>
        </div>
    );
}
