import settings from "../../settings";
import { ImageData } from "../../types/images";
import AppearancePart from "./AppearancePart";

type Props = {
    appearanceIndex: number;
    changeAppearanceIndex: (index: number) => void;
}

export default function SelectAppearance({ appearanceIndex, changeAppearanceIndex }: Props) {

    const onSelect = (index: number) => {
        changeAppearanceIndex(index);
    }

    return (
        <div className="h-20 flex flex-row gap-2 p-2">
            { settings.images.trueOrFalse.map((data: ImageData, index: number) => <AppearancePart altText={ data.altText } index={ index } info={ data.info } onSelect={ onSelect } url={ data.url } selectedIndex={ appearanceIndex } key={ index } />
            )}
        </div>
    );
}
