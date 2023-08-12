import { useState } from "react";

import InputName from "../../components/InputName";
import UseImage from "../../components/UseImage";
import { fetchNamesTrueOrFalse } from "../../fetchers";
import SelectAppearance from "./SelectAppearance";
import TrueOrFalseDataHandler from "../../dataHandlers/trueOrFalse";
import InputOptions from "./InputOptions";

export default function TrueOrFalse() {
    const dataHandler = new TrueOrFalseDataHandler();

    return (
        <div>
            <InputName fetchNamesFunction={ fetchNamesTrueOrFalse } dataHandler={ dataHandler } />
            <SelectAppearance dataHandler={ dataHandler } />
            <InputOptions dataHandler={ dataHandler } />
            <UseImage />
        </div>
    );
}
