import {Duration} from "Interface/Comp";

export interface ModalProps extends CenterProps {
    open?: boolean;
    onClose?: () => void;
    duration?: Duration;
}

export interface CloseProps {
    onClose?: () => void;
}

export interface CenterProps {
    YCenter?: boolean;
    XCenter?: boolean;
}
