export enum DataTypes {
    Quiz,
    TrueOrFalse,
    MultipleChoice
}

export type Data = {
    type: DataTypes;
    url: string;
}
