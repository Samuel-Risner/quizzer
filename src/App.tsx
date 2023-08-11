import Create from "./create/Create";
import Settings from "./appSettings/Settings";
import Select from "./select/Select";
import Edit from "./edit/Edit";
import Menu from "./components/Menu";

export default function App() {
    return (
        <Menu options={[
            { name: "Frage oder Quiz auswählen", component: <Select />},
            { name: "Einstellungen", component: <Settings /> },
            { name: "Frage oder Quiz Erstellen", component: <Create /> },
            { name: "Frage oder Quiz Bearbeiten", component: <Edit /> }
        ]}/>
    );
}
