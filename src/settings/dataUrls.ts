import general from "./general";

export default {
    quizzes: general.rootUrl + "Quizze",
    multipleChoice: general.rootUrl + "Fragen/MultipleChoice",
    trueOrFalse: general.rootUrl + "Fragen/WahrOderFalsch",
    names: {
        quizzes: general.rootUrl + "Namen/quizze.json",
        multipleChoice: general.rootUrl + "Namen/multipleChoice.json",
        trueOrFalse: general.rootUrl + "Namen/wahrOderFalsch.json"
    }
};
