import React, { useState } from "react";

type Props = {
    url: string;
    changeUrl: (url: string) => void;
    useImage: boolean;
    changeUseImage: (use: boolean) => void;
}

export default function UseImage({ url, changeUrl, useImage, changeUseImage }: Props) {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            changeUrl(url)
            changeUseImage(true);
        } else {
            changeUrl("");
            changeUseImage(false);
        }
    }

    const handleOnChangeUrlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeUrl(e.currentTarget.value);
    }

    return (
        <div>
            <label>
                Bild benutzen:
                <input type="checkbox" onChange={ handleCheckboxChange } />
            </label>
            <label>
                Bitte URL eingeben:
                <input disabled={ !useImage } onChange={ handleOnChangeUrlInput } />
            </label>
            { useImage? <img src={ url } /> : <></> }
        </div>
    );
}
