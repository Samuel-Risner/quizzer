import UseImage from "../../components/UseImage";
import SelectAppearance from "./SelectAppearance";

type ImageData = {
    url: string;
    altText: string;
    info: string;
}

const imageData: ImageData[] = [];

export default function TrueOrFalse() {
    return (
        <div>
            <SelectAppearance />
            <input type="text" />
            <UseImage />
        </div>
    );
}
