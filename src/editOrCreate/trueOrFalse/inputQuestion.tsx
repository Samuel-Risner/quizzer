type Props = {
    question: string;
    changeQuestion: (question: string) => void;
}

export default function InputQuestion({ question, changeQuestion }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeQuestion(e.target.value);
    }

    return (
        <div>
            <label>
                Bitte die Frage eingeben:
                <input defaultValue={ question } onChange={ handleChange } type="text" name="text" className="ml-2 bg-neutral-300 rounded-lg px-2" />
            </label>
            { question === ""? <div className="text-red-500">Bitte eine Frage eingeben!</div> : <></>}
        </div>
    );
}
