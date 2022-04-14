import style from "./Effect.module.scss";
import {useToggleTime} from "Hook/Helper.hook";
import {IEffectProps} from "./IEffect";
import {FC, memo} from "react";
import {cn} from "Helper/helper";

export const Effect: FC<IEffectProps> = memo(
    ({
         children,
         type,
         duration,
         open,
         wh,
         height,
         width,
         onStartAnim,
         onEndAnim,
     }) => {
        const toggle = useToggleTime(open || false, duration);

        const classStyle = cn({
            [style[type + "-open"]]: open && !toggle,
            [style[type + "-" + duration]]: type,
            [style.wh]: wh,
        });

        return (
            <div
                className={classStyle}
                style={{width, height}}
                onAnimationStart={onStartAnim}
                onAnimationEnd={onEndAnim}
            >
                {children}
            </div>
        );
    }
);

Effect.defaultProps = {
    type: "fade",
    duration: 200,
    open: false,
    width: "100%",
    height: "100%",
};
