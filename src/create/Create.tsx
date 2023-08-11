import Menu from "../components/Menu";
import CreateQuestion from "./CreateQuestion";
import CreateQuiz from "./CreateQuiz";

export default function Create() {
    return (
        <Menu options={[
            { name: "Frage erstellen", component: <CreateQuestion /> },
            { name: "Quiz erstellen", component: <CreateQuiz /> }
        ]} />
    );
}
