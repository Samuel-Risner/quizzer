import React, { useState } from "react";
import DataHandlerParent from "../dataHandlers/parents";

type Props = {
    dataHandler: DataHandlerParent;
}

export default function UseImage({ dataHandler }: Props) {
    const [ url, setUrl ] = useState<string>(dataHandler.getImgUrl() || "");
    const [ useUrl, setUseUrl ] = useState<boolean>(dataHandler.getImgUrl() !== null);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            dataHandler.setImgUrl(url);
            setUseUrl(true);
        } else {
            dataHandler.setImgUrl(null);
            setUseUrl(false);
        }
    }

    const handleOnChangeUrlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.currentTarget.value);
        dataHandler.setImgUrl(e.currentTarget.value);
    }

    return (
        <div>
            <label>
                Bild benutzen:
                <input type="checkbox" onChange={ handleCheckboxChange } />
            </label>
            <label>
                Bitte URL eingeben:
                <input disabled={ !useUrl } onChange={ handleOnChangeUrlInput } />
            </label>
            { useUrl? <img src={ url } /> : <></> }
        </div>
    );
}
