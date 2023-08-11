import React, { useState } from "react";
import { useQuery } from "react-query";
import DataHandlerParent from "../dataHandlers/parents";

type Props = {
    fetchNamesFunction: () => Promise<string[]>;
    dataHandler: DataHandlerParent;
}

export default function InputName({ fetchNamesFunction, dataHandler }: Props) {
    const [ name, changeName ] = useState<string>(dataHandler.getNameOrEmptyString());
    const [ nameExists, changeNameExists ] = useState<boolean | null>(null);
    const { data, status } = useQuery("overview", fetchNamesFunction);

    if (status === "loading") return <div>Bereits vorhandene Namen werden geladen...</div>;
    if ((status === "error") || (data === undefined)) return <div>Die bereits vorhandenen Namen konnten nicht geladen werden</div>;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newName = formData.get("name") as string;
        
        if (newName === null) return;
        if (data.includes(newName)) {
            changeNameExists(true);
            return;
        }

        changeNameExists(false);
        changeName(newName);
        dataHandler.setName(name);
    }

    let nameExistsJSX: JSX.Element = <></>;

    if (nameExists === true) {
        nameExistsJSX = <div className="text-red-500">Der Name "{ name }" existiert bereits!</div>
    } else if (nameExists === false) {
        nameExistsJSX = <div className="text-green-500">Der Name "{ name }" kann verwendet werden.</div>
    } else {
        nameExistsJSX = <></>;
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>
                    Bitte den Namen eingeben:
                    <input defaultValue={ name } type="text" name="name" />
                </label>
                <button type="submit">überprüfen</button>
                { nameExistsJSX }
            </form>
        </div>
    );
}
