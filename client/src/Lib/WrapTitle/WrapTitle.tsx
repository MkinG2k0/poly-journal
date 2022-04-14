import style from "./WrapTitle.module.scss";
import {WrapTitleProps} from "./IWrapTitle";
import {cn} from "Helper/helper";
import {FC} from "react";

export const WrapTitle: FC<WrapTitleProps> = ({
                                                  children,
                                                  title,
                                                  onClickWrap,
                                                  classWrap,
                                              }) => {
    const styleWrapS = cn({[classWrap]: classWrap}, style.wrap);

    return (
        <div className={styleWrapS} onClick={onClickWrap}>
            {title && <label className={style.title}>{title}</label>}
            {children}
        </div>
    );
};

WrapTitle.defaultProps = {};
