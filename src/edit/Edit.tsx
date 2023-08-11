import Menu from "../menu/Menu";
import EditQuestion from "./EditQuestion";
import EditQuiz from "./EditQuiz";

export default function Edit() {
    return (
        <Menu optionStyle="" optionStyleSelected="" options={[
            { name: "Frage bearbeiten", component: <EditQuestion /> },
            { name: "Quiz bearbeiten", component: <EditQuiz /> }
        ]} />
    );
}
