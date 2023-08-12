export default abstract class DataHandlerParent {

    abstract setName(name: string): void;
    abstract getNameOrEmptyString(): string;

    abstract setImgUrl(imgUrl: string | null): void;
    abstract getImgUrl(): string | null;
    
}
