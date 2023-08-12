import React, { useState } from "react";

type Props = {
    name: string;
    changeName: (name: string) => void;
    allNames: string[];
}

export default function InputName({ name, changeName, allNames }: Props) {
    const [ nameExists, changeNameExists ] = useState<boolean>(true);

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeNameExists(allNames.includes(e.currentTarget.value));
        changeName(e.currentTarget.value);
    }

    let nameCheckJSX: JSX.Element = <></>;

    if (name === "") {
        nameCheckJSX = <div className="text-red-500">Bitte einen Namen eingeben!</div>
    } else if (nameExists) {
        nameCheckJSX = <div className="text-red-500">Der Name "{ name }" existiert bereits!</div>
    } else {
        nameCheckJSX = <div className="text-green-500">Der Name "{ name }" kann verwendet werden.</div>
    }

    return (
        <div>
            <label>
                Bitte den Namen eingeben:
                <input onChange={ handleNameInput } defaultValue={ name } type="text" name="name" />
            </label>
            { nameCheckJSX }
        </div>
    );
}
