import { IReqWrap, IStatus, TStatus } from "../Interface/IStore";
interface setErrorProp {
    (state: IStatus<any>, action: any, status: TStatus): void;
}
export declare const setStatus: setErrorProp;
export declare function setName<E extends {
    lastName: string;
    firstName: string;
    patronymic: string;
}>(employee: E): string;
export declare const getArr: (length: number) => Array<undefined>;
export declare function checkError(request: {
    data: IReqWrap<any>;
}): void;
export declare function statTrue(status: TStatus): boolean;
export declare function cutText(text: string, length?: number): string;
export declare const validObj: (obj: object) => boolean;
export declare const getRand: (min?: number, max?: number) => number;
export declare const mergeRefs: (...refs: any) => any;
export declare const cn: (obgClass: object, ...className: string[]) => string;
export {};
