import DataHandlerParent from "./parents";

export default class TrueOrFalseDataHandler extends DataHandlerParent {
    
    constructor(
        private name: string | null = null,
        private trueText: string | null = null,
        private falseText: string | null = null,
        private imgUrl: string | null = null,
        private appearanceIndex: number = 0
    ) {
        super();
        console.log("foo7");
    }

    setName(name: string | null) {
        this.name = name;
    }

    setTrueText(trueText: string | null) {
        this.trueText = trueText;
    }

    setFalseText(falseText: string | null) {
        this.falseText = falseText;
    }

    setImgUrl(imgUrl: string | null) {
        this.imgUrl = imgUrl;
    }

    setAppearanceIndex(index: number) {
        this.appearanceIndex = index;
    }

    getAppearanceIndex(): number {
        return this.appearanceIndex;
    }

    getNameOrEmptyString(): string {
        return this.name === null? "" : this.name;
    }

    canBeSaved(): boolean {
        return (this.name !== null) && (this.trueText !== null) && (this.falseText !== null);
    }
}
