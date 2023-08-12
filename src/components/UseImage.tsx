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
                <input type="checkbox" onChange={ handleCheckboxChange } className="ml-2" />
            </label>
            <br />
            <label>
                Bitte URL eingeben:
                <input disabled={ !useImage } onChange={ handleOnChangeUrlInput } className="bg-neutral-300 ml-2 rounded-lg disabled:bg-zinc-100 px-2" />
            </label>
            { useImage? <img src={ url } className="h-30" /> : <></> }
        </div>
    );
}
