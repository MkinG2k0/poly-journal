export declare type TStatus = "idle" | "pending" | "fulfilled" | "rejected";
export declare type TStatusReq = "error" | "success";
export declare type TError = string | undefined | null;
export declare type TNull<T> = T | null;
export interface IReqWrap<T> {
    status: TStatusReq;
    result: T | null | string;
}
export interface IStatus<T> {
    status: TStatus;
    error: TError;
    data: TNull<T>;
}
