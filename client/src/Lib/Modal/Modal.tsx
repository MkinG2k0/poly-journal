import style from "./Modal.module.scss";
import {CenterProps, CloseProps, ModalProps} from "./IModal";
import {useToggleTime} from "Hook/Helper.hook";
import {FC, memo} from "react";
import {Effect} from "../Effect/Effect";
import {cn} from "Helper/helper";

export const Modal: FC<ModalProps> = memo(
    ({children, open, onClose, XCenter, YCenter, duration}) => {
        const toggle = useToggleTime(open, duration);

        if (toggle && !open) return null;

        return (
            <div className={style.wrap + " stopScroll"}>
                <Effect type={"fade"} open={open} duration={duration} wh={true}>
                    <Close onClose={onClose}>
                        <Effect type={"zoom"} open={open} duration={duration} wh={true}>
                            <Center XCenter={XCenter} YCenter={YCenter}>
                                {children}
                            </Center>
                        </Effect>
                    </Close>
                </Effect>
            </div>
        );
    }
);

Modal.defaultProps = {
    duration: 400,
};

export const Close: FC<CloseProps> = ({children, onClose}) => (
    <div className={style.close} onClick={onClose}>
        {children}
    </div>
);

const Center: FC<CenterProps> = ({children, XCenter, YCenter}) => {
    const styleCenter = cn({
        [style.center]: XCenter && YCenter,
        [style["center-x"]]: XCenter && !YCenter,
        [style["center-y"]]: YCenter && !XCenter,
    });

    return (
        <div className={styleCenter} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    );
};

Center.defaultProps = {
    XCenter: true,
    YCenter: true,
};
