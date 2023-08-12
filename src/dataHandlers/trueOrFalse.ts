import DataHandlerParent from "./parents";

export default class TrueOrFalseDataHandler extends DataHandlerParent {
    
    constructor(
        private name: string | null = null,
        private text: string | null = null,
        private imgUrl: string | null = null,
        private appearanceIndex: number = 0
    ) {
        super();
    }

    setName(name: string | null) {
        this.name = name;
    }

    setText(text: string | null) {
        this.text = text;
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

    getImgUrl(): string | null {
        return this.imgUrl;
    }

    canBeSaved(): boolean {
        return (this.name !== null) && (this.text !== null) && (this.name !== "");
    }
}
