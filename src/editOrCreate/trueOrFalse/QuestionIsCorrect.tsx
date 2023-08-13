type Props = {
    questionIsCorrect: boolean;
    changeQuestionIsCorrect: (correct: boolean) => void;
}

export default function QuestionIsCorrect({ questionIsCorrect, changeQuestionIsCorrect }: Props) {
    return (
        <div>
            <button type="button" onClick={ () => { changeQuestionIsCorrect(!questionIsCorrect); } } className="bg-neutral-300 p-2 rounded-xl">
                <span className={ `mr-1 p-1 rounded-lg ${questionIsCorrect? "bg-slate-100" : ""}` }>Richtig</span>
                <span className={ `ml-1 p-1 rounded-lg ${questionIsCorrect? "" : "bg-slate-100"}` }>Falsch</span>
            </button>
        </div>
    );
}
