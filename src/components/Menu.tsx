import { useState } from "react";

type Option = {
    name: string;
    component: JSX.Element;
}

type Props = {
    options: Option[];
    optionBgColor?: string;
    optionSelectedBgColor?: string;
    menuBgColor?: string;
}

export default function Menu({ options, menuBgColor="bg-neutral-300", optionBgColor="bg-slate-400", optionSelectedBgColor="bg-neutral-100" }: Props) {
    const [ selectedOption, setSelectedOption ] = useState<number>(0);

    const changeOption = (index: number) => {
        if (index === selectedOption) return;
        setSelectedOption(index);
    }

    return (
        <>
            <div className={ `flex flex-row p-2 gap-2 ${menuBgColor}` }>
                { options.map((option: Option, index: number) => {
                    return (
                        <button
                            key={ index }
                            className={ `p-1 ${selectedOption === index? `text-neutral-500 ${optionSelectedBgColor}` : optionBgColor}` }
                            onClick={ () => { changeOption(index); } }
                        >{ option.name }</button>
                    )
                }) }
            </div>
            { options[selectedOption].component }
        </>
    );
}
