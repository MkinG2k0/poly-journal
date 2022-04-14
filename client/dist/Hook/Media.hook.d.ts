interface useMediaProps {
    (width: number, or?: 'max' | 'min'): boolean | undefined;
}
export declare const useMedia: useMediaProps;
interface useArrMediaProps {
    (arrWidth: number[], handler: (width: number, on: boolean) => void): void;
}
export declare const useOnArrMedia: useArrMediaProps;
export declare const useArrValueMedia: (arrWidth: number[], initValue: number) => number;
export {};
