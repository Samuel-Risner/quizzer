import general from "./general";
import { ImageData } from "../types/images";

const trueOrFalse: ImageData[] = [
    {
        altText: "links: rot, falsch; rechts: blau, richtig",
        info: "",
        url: general.rootUrl + "assets/questions/trueOrFalse/blueRed/falseTrue.svg"
    },
    {
        altText: "links: blau, richtig; rechts: rot, falsch",
        info: "",
        url: general.rootUrl + "assets/questions/trueOrFalse/blueRed/trueFalse.svg"
    },
    {
        altText: "blau, richtig und rot, falsch werden zufällig angeordnet",
        info: "",
        url: general.rootUrl + "assets/questions/trueOrFalse/blueRed/random.svg"
    },
    {
        altText: "blau oder grün, richtig und rot, falsch werden zufällig angeordnet",
        info: "",
        url: general.rootUrl + "assets/questions/trueOrFalse/completelyRandom.svg"
    },
    {
        altText: "grün, richtig und rot, falsch werden zufällig angeordnet",
        info: "",
        url: general.rootUrl + "assets/questions/trueOrFalse/greenRed/random.svg"
    },
    {
        altText: "links: grün, richtig; rechts: rot, falsch",
        info: "",
        url: general.rootUrl + "assets/questions/trueOrFalse/greenRed/trueFalse.svg"
    },
    {
        altText: "links: rot, falsch; rechts: grün, richtig",
        info: "",
        url: general.rootUrl + "assets/questions/trueOrFalse/greenRed/falseTrue.svg"
    }
];

export default {
    trueOrFalse: trueOrFalse
}
