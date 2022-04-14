import style from "./Theme.module.scss";
import {FC} from "react";
import "Style/style.scss";

export const Theme: FC = ({children}) => {
    return <div className={style.wrap}>{children}</div>;
};
