type Props = {
    index: number;
    url: string;
    altText: string;
    info: string;
    onSelect: (index: number) => void;
    selectedIndex: number;
}

export default function AppearancePart({ url, altText, info, index, onSelect, selectedIndex }: Props) {
    return (
        <button type="button" className={ `h-full ${index === selectedIndex? "border-4 rounded-lg p-1 border-black" : ""}` } onClick={ () => { onSelect(index); }}>
            <img className="h-full" src={ url } alt={ altText } title={ info } />
        </button>
    );
}
