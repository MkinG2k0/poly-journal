import style from "./Select.module.scss";
import {cn, mergeRefs} from "Helper/helper";
import {FC, useState} from "react";
import {WrapTitle} from "Lib/WrapTitle/WrapTitle";
import {useToggle} from "Hook/Hooks";
import {useFocus} from "Hook/Ref.hook";
// import { faClose } from "@fortawesome/free-solid-svg-Icons";
import {Button} from "../Button/Button";
import {Map} from "Lib/Map/Map";
import {SelectProps} from "./ISelect";

export const Select: FC<SelectProps> = ({
                                            title,
                                            data = [],
                                            nameKey,
                                            onChange,
                                            onOpen,
                                            name,
                                            chooseValue,
                                            size,
                                            onClear,
                                        }) => {
    const [value, setItem] = useState<string | undefined>(chooseValue);
    const {toggle, setToggle} = useToggle();
    const {ref, onFocus, isFocus} = useFocus();
    const refs = mergeRefs(ref);
    const classChoose = cn(
        {
            [style.choose]: true,
        },
        "f-" + size
    );

    function onClick(item: { name: string }, name: string) {
        if (onChange) onChange(item, name);
        onFocus(false);
        setItem(item.name);
    }

    function Item(item: { id: number; name: string }) {
        // @ts-ignore
        return (
            <li
                className={style.item}
                key={item.id}
                onClick={() => onClick(item, name)}
            >
                {" "}
                {item[nameKey]}{" "}
            </li>
        );
    }

    function ItemList() {
        const classDrop = cn(
            {
                [style.open]: isFocus,
            },
            style.drop
        );
        if (!isFocus || toggle) return null;
        return (
            <ul className={classDrop}>
                <Map Comp={Item} data={data}/>
            </ul>
        );
    }

    const Toggle = () => setToggle();
    const onBlur = () => setToggle(false);

    const onFocusSelect = () => {
        onOpen(name);
        setToggle(true);
    };

    function ClearValue() {
        setItem("");
        onClear(name);
    }

    return (
        <WrapTitle title={title}>
            <div
                className={classChoose}
                onClick={Toggle}
                onFocus={onFocusSelect}
                tabIndex={0}
                ref={refs}
                onBlur={onBlur}
            >
                <div className={style.text}>
                    <span>{value}</span>
                    {value && (
                        <div className={style.closeB}>
                            {/*<Button*/}
                            {/*  icon={faClose}*/}
                            {/*  type={"link"}*/}
                            {/*  size={2}*/}
                            {/*  onClick={ClearValue}*/}
                            {/*/>*/}
                        </div>
                    )}
                </div>
                <ItemList/>
            </div>
        </WrapTitle>
    );
};

Select.defaultProps = {
    nameKey: "name",
    chooseValue: "",
    name: "name",
    size: 4,
    onOpen: () => {
    },
    onClear: () => {
    },
};
