import Menu from "../components/Menu";
import TrueOrFalse from "../editOrCreate/trueOrFalse/TrueOrFalse";

export default function CreateQuestion() {
    return (
        <Menu options={[
            { name: "Wahr oder Falsch", component: <TrueOrFalse /> }
        ]} />
    );
}
