import { useState } from "react";

import settings from "../../settings";
import { ImageData } from "../../types/images";
import AppearancePart from "./AppearancePart";
import TrueOrFalseDataHandler from "../../dataHandlers/trueOrFalse";

type Props = {
    dataHandler: TrueOrFalseDataHandler;
}

export default function SelectAppearance({ dataHandler }: Props) {
    const [ imageIndex, setImageIndex ] = useState<number>(dataHandler.getAppearanceIndex());

    const onSelect = (index: number) => {
        setImageIndex(index);
        dataHandler.setAppearanceIndex(index);
    }

    return (
        <div className="h-20 flex flex-row gap-2 p-2">
            { settings.images.trueOrFalse.map((data: ImageData, index: number) => <AppearancePart altText={ data.altText } index={ index } info={ data.info } onSelect={ onSelect } url={ data.url } selectedIndex={ imageIndex } key={ index } />
            )}
        </div>
    );
}
