import style from "./InputDate.module.scss";
import {InputDateProps} from "./IInputDate";
import {FC, useRef} from "react";
import {WrapTitle} from "Lib/WrapTitle/WrapTitle";
import {mergeRefs} from "Helper/helper";
import {useFocus} from "Hook/Ref.hook";

export const InputDate: FC<InputDateProps> = ({
                                                  title,
                                                  classWrap,
                                                  onChange = (value: string, name: string) => {
                                                  },
                                                  name = "",
                                                  value,
                                                  required,
                                              }) => {
    const date = useRef(null);
    const {ref, onFocus} = useFocus();
    const refMain = mergeRefs(ref, date);

    // @ts-ignore
    const onChangeDate = () => onChange(date.current.value, name);

    const onClickWrap = () => onFocus(true);

    return (
        <WrapTitle title={title} classWrap={classWrap} onClickWrap={onClickWrap}>
            <input
                ref={refMain}
                value={value}
                type={"date"}
                className={style.wrap}
                required={required}
                onChange={onChangeDate}
            />
        </WrapTitle>
    );
};

InputDate.defaultProps = {
    required: false,
};
