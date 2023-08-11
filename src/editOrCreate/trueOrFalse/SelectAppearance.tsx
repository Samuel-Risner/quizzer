import { useState } from "react";

import settings from "../../settings";
import { ImageData } from "../../types/images";
import AppearancePart from "./AppearancePart";

export default function SelectAppearance() {
    const [ imageIndex, setImageIndex ] = useState<number>(0);

    const onSelect = (index: number) => {
        setImageIndex(index);
    }

    return (
        <div className="h-20 flex flex-row gap-2 p-2">
            { settings.images.trueOrFalse.map((data: ImageData, index: number) => {
                return <AppearancePart altText={ data.altText } index={ index } info={ data.info } onSelect={ onSelect } url={ data.url } selectedIndex={ imageIndex } key={ index } />
            })}
        </div>
    );
}
