import { useState } from "react";

import InputName from "../../components/InputName";
import UseImage from "../../components/UseImage";
import { fetchNamesTrueOrFalse } from "../../fetchers";
import SelectAppearance from "./SelectAppearance";
import Save from "../../components/Save";
import InputQuestion from "./inputQuestion";

export default function TrueOrFalse() {
    const [ questionName, setQuestionName ] = useState<string>("");
    const [ appearanceIndex, setAppearanceIndex ] = useState<number>(0);
    const [ question, setQuestion ] = useState<string>("");
    const [ imageUrl, setImageUrl ] = useState<string>("");
    const [ useImage, setUseImage ] = useState<boolean>(false);

    const changeQuestionName = (name: string) => { setQuestionName(name); }
    const changeAppearanceIndex = (index: number) => { setAppearanceIndex(index); }
    const changeQuestion = (question: string) => { setQuestion(question); }
    const changeImageUrl = (url: string) => { setImageUrl(url); }
    const changeUseImage = (use: boolean) => { setUseImage(use); }

    return (
        <div>
            <InputName name={ questionName } changeName={ changeQuestionName } fetchNamesFunction={ fetchNamesTrueOrFalse } />
            <SelectAppearance appearanceIndex={ appearanceIndex } changeAppearanceIndex={ changeAppearanceIndex } />
            <InputQuestion question={ question } changeQuestion={ changeQuestion } />
            <UseImage url={ imageUrl } changeUrl={ changeImageUrl } useImage={ useImage } changeUseImage={ changeUseImage } />
        </div>
    );
}
