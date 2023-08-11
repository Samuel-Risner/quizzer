import Menu from "../components/Menu";
import EditQuestion from "./EditQuestion";
import EditQuiz from "./EditQuiz";

export default function Edit() {
    return (
        <Menu options={[
            { name: "Frage bearbeiten", component: <EditQuestion /> },
            { name: "Quiz bearbeiten", component: <EditQuiz /> }
        ]} />
    );
}
