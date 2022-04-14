import { Size } from "@interface/Comp";
export interface SelectProps {
    data?: {
        name: string;
        id: number;
    }[];
    onClear?: (name: string) => void;
    onOpen?: (name: string) => void;
    onChange?: (item: object, name: string) => void;
    nameKey?: string;
    spread?: any;
    title?: string;
    name?: string;
    chooseValue?: string;
    size?: Size;
}
