import Menu from "../components/Menu";
import Questions from "./Questions";
import Quizzes from "./Quizzes";

export default function Select() {
    return (
        <Menu options={[
            { name: "Quizze", component: <Quizzes /> },
            { name: "Fragen", component: <Questions />}
        ]} />
    );
}
