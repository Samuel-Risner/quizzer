import Menu from "../components/Menu";
import MultipleChoice from "../editOrCreate/multipleChoice/MultipleChoice";
import TrueOrFalse from "../editOrCreate/trueOrFalse/TrueOrFalse";

export default function CreateQuestion() {
    return (
        <Menu options={[
            { name: "Wahr oder Falsch", component: <TrueOrFalse /> },
            { name: "Multiple Choice", component: <MultipleChoice />}
        ]} />
    );
}
