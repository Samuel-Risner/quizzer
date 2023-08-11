import React from "react";
import { useQuery } from "react-query";

import { fetchOverview } from "./fetchers";
import Menu from "./menu/Menu";
import Create from "./create/Create";
import Settings from "./settings/Settings";
import Select from "./select/Select";
import Edit from "./edit/Edit";

export default function App() {
    // const { data, status } = useQuery("overview", fetchOverview);

    // if (status === "loading") return <div>Loading...</div>;
    // if (status === "error") return <div>Error!</div>;

    // <div>{ JSON.stringify(data) }</div>

    // <div>
            
            
    //         <div>Frage auswählen</div>
    //         <div>Einstellungen</div>
    //         <div>Fragen erstellen</div>
    //     </div>

    return (
        <Menu optionStyle="bg-red-500" optionStyleSelected="bg-blue-500" options={[
            { name: "Frage oder Quiz auswählen", component: <Select />},
            { name: "Einstellungen", component: <Settings /> },
            { name: "Frage oder Quiz Erstellen", component: <Create /> },
            { name: "Frage oder Quiz Bearbeiten", component: <Edit /> }
        ]}/>
    );
}
