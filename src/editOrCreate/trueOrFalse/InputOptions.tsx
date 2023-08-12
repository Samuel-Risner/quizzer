import TrueOrFalseDataHandler from "../../dataHandlers/trueOrFalse";

type Props = {
    dataHandler: TrueOrFalseDataHandler;
}

export default function InputOptions({ dataHandler }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dataHandler.setText(e.target.value);
    }

    return (
        <div>
            <label>
                Bitte die Frage eingeben:
                <input onChange={ handleChange } type="text" name="text" />
            </label>
        </div>
    );
}
