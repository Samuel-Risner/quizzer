import Menu from "../menu/Menu";
import MultipleChoice from "./questions/MultipleChoice";
import TrueOrFalse from "./questions/TrueOrFalse";

export default function CreateQuestion() {
    return (
        <Menu optionStyle="" optionStyleSelected="" options={[
            { name: "Wahr oder Falsch", component: <TrueOrFalse /> },
            { name: "Multiple Choice", component: <MultipleChoice /> }
        ]} />
    );
}
