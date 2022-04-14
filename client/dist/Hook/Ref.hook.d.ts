/// <reference types="react" />
export declare const useFocus: (initialRef?: any) => {
    ref: import("react").MutableRefObject<any>;
    onFocus: (type?: boolean) => void;
    isFocus: boolean;
};
interface useInputProps {
    (initialRef: HTMLInputElement, text: string, name: string, eventChange: (value: string, name: string, ref: any) => void, speedUpdate?: number): {
        ref: any;
        spread: {
            onChange: any;
            value: any;
        };
    };
}
export declare const useInput: useInputProps;
export declare const useHover: (refInit?: any) => {
    isHovering: boolean;
    ref: import("react").MutableRefObject<any>;
};
export {};
