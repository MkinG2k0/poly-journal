import style from "./Input.module.scss";
import {useFocus, useInput} from "Hook/Ref.hook";
import {cn, mergeRefs} from "Helper/helper";
import {IInputProps} from "./IInputField";
import {WrapTitle} from "Lib/WrapTitle/WrapTitle";
import {FC} from "react";

export const Input: FC<IInputProps> = ({
                                           title,
                                           inputRef,
                                           onChange,
                                           spread,
                                           value,
                                           inputType,
                                           classWrap,
                                           name,
                                           placeholder,
                                           speedUpdate,
                                           size,
                                           required,
                                           styleInput,
                                           children
                                       }) => {
    const refInput = useInput(
        inputRef?.current,
        value,
        name,
        onChange,
        speedUpdate
    );
    const refFocus = useFocus(inputRef.current);
    const combineRef = mergeRefs(inputRef, refFocus.ref, refInput.ref);

    // TODO: не работает useInput

    const onClickWrap = () => refFocus.onFocus(true);

    const classInput = cn({}, style.input, `f-${size}`);

    return (
        <WrapTitle title={title} onClickWrap={onClickWrap} classWrap={classWrap}>
            <div className={style.wrap}>
                <input
                    type={inputType}
                    className={classInput}
                    ref={combineRef}
                    placeholder={placeholder}
                    {...spread}
                    {...refInput.spread}
                    required={required}
                />
                {children}
            </div>
        </WrapTitle>
    );
};

Input.defaultProps = {
    size: 4,
    onChange: () => {
    },
    inputRef: {current: null},
    styleInput: 1,
    inputType: "text",
    name: "name",
    speedUpdate: 500,
    required: false,
};
