import { useState } from "react";
import { useQuery } from "react-query";

import InputName from "../../components/InputName";
import UseImage from "../../components/UseImage";
import { fetchNamesTrueOrFalse } from "../../fetchers";
import SelectAppearance from "./SelectAppearance";
import Save from "../../components/Save";
import InputQuestion from "./inputQuestion";
import { Data } from "../../types/trueOrFalse";

export default function TrueOrFalse() {
    const [ questionName, setQuestionName ] = useState<string>("");
    const [ appearanceIndex, setAppearanceIndex ] = useState<number>(0);
    const [ question, setQuestion ] = useState<string>("");
    const [ imageUrl, setImageUrl ] = useState<string>("");
    const [ useImage, setUseImage ] = useState<boolean>(false);
    const [ currentlyEditing, setCurrentlyEditing ] = useState<boolean>(true);

    const { data, status, refetch } = useQuery("overview", fetchNamesTrueOrFalse);

    if (status === "loading") return <div>Bereits vorhandene Namen werden geladen...</div>;
    if ((status === "error") || (data === undefined)) return <div>Die bereits vorhandenen Namen konnten nicht geladen werden!</div>;

    const changeQuestionName = (name: string) => { setQuestionName(name); }
    const changeAppearanceIndex = (index: number) => { setAppearanceIndex(index); }
    const changeQuestion = (question: string) => { setQuestion(question); }
    const changeImageUrl = (url: string) => { setImageUrl(url); }
    const changeUseImage = (use: boolean) => { setUseImage(use); }
    const changeCurrentlyEditing = (editing: boolean) => { setCurrentlyEditing(editing); }
    const newQuestion = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        refetch();

        setQuestionName("");
        setAppearanceIndex(0);
        setQuestion("");
        setImageUrl("");
        setUseImage(false);
    }

    const questionDataToSave: Data = {
        name: questionName,
        appearanceIndex: appearanceIndex,
        question: question,
        correct: false,
        url: useImage? imageUrl : undefined
    }

    return (
        <div>
            <form onSubmit={ newQuestion }>
                <button type="submit">Neue Frage</button>
                { currentlyEditing? <>
                    <InputName name={ questionName } changeName={ changeQuestionName } allNames={ data } />
                    <SelectAppearance appearanceIndex={ appearanceIndex } changeAppearanceIndex={ changeAppearanceIndex } />
                    <InputQuestion question={ question } changeQuestion={ changeQuestion } />
                    <UseImage url={ imageUrl } changeUrl={ changeImageUrl } useImage={ useImage } changeUseImage={ changeUseImage } /></> : <></>
                }

                { ((questionName !== "") && (question !== ""))? <Save
                    currentlyEditing={ currentlyEditing }
                    changeCurrentlyEditing={ changeCurrentlyEditing }

                    useNames={ true }

                    namesData={ JSON.stringify([questionName, ...data]) }
                    namesFileName="wahrOderFalsch.json"
                    namesUrl="Namen/wahrOderFalsch.json"

                    questionData={ JSON.stringify(questionDataToSave)}
                    questionFileName={ `${questionName}.json` }
                    questionUrl={ `Fragen/WahrOderFalsch/${questionName}.json` }
                /> : <div>Bitte alles ausfüllen!</div> }
            </form>
        </div>
    );
}
