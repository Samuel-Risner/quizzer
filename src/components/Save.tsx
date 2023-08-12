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
            <button type="button" onClick={ () => { changeCurrentlyEditing(false); } }>Zu speichern</button>
        </div>
    );
    
    return (
        <div>
            <button type="button" onClick={ () => { changeCurrentlyEditing(true); } }>Weiter bearbeiten</button>
            { useNames? <div>
                Die Namen bitte unter "{namesUrl}" speichern.
                <a href={ URL.createObjectURL(new File([namesData], namesFileName)) } download={ namesFileName }>Namen herunterladen</a>
                <div>Copy Names</div>
            </div> : <></> }

            <div>
                Die Frage bitte unter "{questionUrl}" speichern.
                <a href={ URL.createObjectURL(new File([questionData], questionFileName)) } download={ questionFileName }>Frage herunterladen</a>
                <div>Copy Questions</div>
            </div>
        </div>
    );
}
