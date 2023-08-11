import Menu from "../menu/Menu";
import CreateQuestion from "./CreateQuestion";
import CreateQuiz from "./CreateQuiz";

export default function Create() {
    return (
        <Menu optionStyle="" optionStyleSelected="" options={[
            { name: "Frage erstellen", component: <CreateQuestion /> },
            { name: "Quiz erstellen", component: <CreateQuiz /> }
        ]} />
    );
}
