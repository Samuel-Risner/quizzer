import TrueOrFalseDataHandler from "../../dataHandlers/trueOrFalse";

type Props = {
    dataHandler: TrueOrFalseDataHandler;
}

export default function InputOptions({ dataHandler }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === "trueText") {
            dataHandler.setTrueText(e.target.value);
        } else if (e.currentTarget.name === "falseText") {
            dataHandler.setFalseText(e.target.value);
        }
    }

    return (
        <div>
            <label>
                Bitte den wahren Text eingeben:
                <input onChange={ handleChange } type="text" name="trueText" />
            </label>
            <label>
                Bitte den falschen Text eingeben:
                <input onChange={ handleChange } type="text" name="falseText" />
            </label>
        </div>
    );
}
