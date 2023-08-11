import InputName from "../../components/InputName";
import UseImage from "../../components/UseImage";
import { fetchNamesTrueOrFalse } from "../../fetchers";
import SelectAppearance from "./SelectAppearance";

export default function TrueOrFalse() {
    return (
        <div>
            <InputName fetchNamesFunction={ fetchNamesTrueOrFalse } setName={ (name: string) => {}} />
            <SelectAppearance />
            <input type="text" />
            <UseImage />
        </div>
    );
}
