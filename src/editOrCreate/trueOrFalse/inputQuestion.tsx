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
                <input defaultValue={ question } onChange={ handleChange } type="text" name="text" />
            </label>
        </div>
    );
}
