import store from "Redux/Store/store";
export type TStatus = "idle" | "pending" | "fulfilled" | "rejected";
export type TStatusReq = "error" | "success";
export type TError = string | undefined | null;
export type TNull<T> = T | null;

export interface IReqWrap<T> {
    status: TStatusReq;
    result: T | null | string;
}

export interface IStatus<T> {
    status: TStatus;
    error: TError;
    data: TNull<T>;
}


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface IReqWrap<T> {
    status: TStatusReq,
    result: T | null | string,
}


export interface IStatus<T> {
    status: TStatus
    error: TError
    data: TNull<T>
}

