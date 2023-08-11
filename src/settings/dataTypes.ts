import general from "./general";
import { Data, DataTypes } from "../types/data";

const data: Data[] = [
    {
        type: DataTypes.Quiz,
        url: general.rootUrl + "Quizze"
    },
    {
        type: DataTypes.MultipleChoice,
        url: general.rootUrl + "Fragen/MultipleChoice"
    },
    {
        type: DataTypes.TrueOrFalse,
        url: general.rootUrl + "Fragen/WahrOderFalsch"
    }
];
export default data;
