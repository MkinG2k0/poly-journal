import style from "./TextArea.module.scss";
import {ITextArea} from "./ItextArea";
import {WrapTitle} from "Lib/WrapTitle/WrapTitle";
import {useInput} from "Hook/Ref.hook";
import {FC} from "react";

export const TextArea: FC<ITextArea> = ({
                                            value,
                                            title,
                                            onClickWrap,
                                            spread,
                                            name,
                                            onChange,
                                        }) => {
    const input = useInput(null, value, name, onChange);

    return (
        <WrapTitle title={title} onClickWrap={onClickWrap}>
      <textarea
          className={style.wrap}
          ref={input.ref}
          {...input.spread}
          {...spread}
      >
        {value}
      </textarea>
        </WrapTitle>
    );
};

TextArea.defaultProps = {
    onChange: () => {
    },
};
