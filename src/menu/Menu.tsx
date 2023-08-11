import { useState } from "react";

type Option = {
    name: string;
    component: JSX.Element;
}

type Props = {
    options: Option[];
    optionStyle: string;
    optionStyleSelected: string;
    menuStyle?: string;
}

export default function Menu({ options, optionStyle, optionStyleSelected, menuStyle="flex flex-row m-2 gap-2" }: Props) {
    const [ selectedOption, setSelectedOption ] = useState<number>(0);

    const changeOption = (index: number) => {
        if (index === selectedOption) return;
        setSelectedOption(index);
    }

    return (
        <>
            <div className={ menuStyle }>
                { options.map((option: Option, index: number) => {
                    return (
                        <button
                            key={ index }
                            className={ selectedOption === index? optionStyleSelected : optionStyle }
                            onClick={ () => { changeOption(index); } }
                        >{ option.name }</button>
                    )
                }) }
            </div>
            { options[selectedOption].component }
        </>
    );
}
