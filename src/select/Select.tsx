import Menu from "../menu/Menu";
import Questions from "./Questions";
import Quizzes from "./Quizzes";

export default function Select() {
    return (
        <Menu optionStyle="bg-green-500" optionStyleSelected="bg-pink-500" options={[
            { name: "Quizze", component: <Quizzes /> },
            { name: "Fragen", component: <Questions />}
        ]} />
    );
}
