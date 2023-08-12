import { useState } from "react";

type Props = {
    currentlyEditing: boolean;
    changeCurrentlyEditing: (editing: boolean) => void;

    useNames: boolean;

    namesData: string;
    namesFileName: string;
    namesUrl: string;

    questionData: string;
    questionFileName: string;
    questionUrl: string;
}

export default function Save({ currentlyEditing, changeCurrentlyEditing, useNames, namesData, namesFileName, namesUrl, questionData, questionFileName, questionUrl }: Props) {
    if (currentlyEditing) return (
        <div>
            <button type="button" onClick={ () => { changeCurrentlyEditing(false); } } className="bg-pink-400 px-2 rounded-lg mx-auto">Zu speichern</button>
        </div>
    );
    
    return (
        <div>
            <button type="button" onClick={ () => { changeCurrentlyEditing(true); } } className="bg-pink-400 px-2 rounded-lg mx-auto">Weiter bearbeiten</button>
            { useNames? <div>
                Die Namen bitte unter "<span className="font-bold">{namesUrl}</span>" speichern.
                <br />
                <a href={ URL.createObjectURL(new File([namesData], namesFileName)) } download={ namesFileName } className="bg-purple-300 px-2 rounded-lg mx-auto">Namen herunterladen</a>
                <br />
                <button type="button" onClick={ () => { navigator.clipboard.writeText(namesData); } } className="bg-purple-300 px-2 rounded-lg mx-auto">Namen kopieren</button>
            </div> : <></> }

            <div>
                Die Frage bitte unter "<span className="font-bold">{questionUrl}</span>" speichern.
                <br />
                <a href={ URL.createObjectURL(new File([questionData], questionFileName)) } download={ questionFileName } className="bg-purple-300 px-2 rounded-lg mx-auto">Frage herunterladen</a>
                <br />
                <button type="button" onClick={ () => { navigator.clipboard.writeText(questionData); } } className="bg-purple-300 px-2 rounded-lg mx-auto">Frage kopieren</button>
            </div>
        </div>
    );
}
