import {IReqWrap, IStatus, TStatus} from "Interface/IStore";

interface setErrorProp {
    (state: IStatus<any>, action: any, status: TStatus): void;
}

export const setStatus: setErrorProp = (state, action, status) => {
    state.status = status;
    if (status === "rejected") state.error = action?.payload;
    else state.error = undefined;
};

export function setName<E extends { lastName: string; firstName: string; patronymic: string }>(employee: E) {
    return [
        employee.lastName ?? " ",
        employee.firstName ?? " ",
        employee.patronymic ?? " ",
    ].join(" ");
}

export const getArr = (length: number): Array<undefined> =>
    Array.from({length});

export function checkError(request: { data: IReqWrap<any> }) {
    if (request.data.status === "error") throw new Error("Server Error");
}

export function statTrue(status: TStatus) {
    return status === "fulfilled";
}

export function cutText(text: string, length: number = 30) {
    if (text?.length > length) return text.slice(0, length - 4) + " ...";
    else return text;
}

export const validObj = (obj: object) => {
    return Object.keys(obj).length > 0;
};

export const getRand = (min = 30, max = 100): number => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const mergeRefs = (...refs: any) => {
    const filteredRefs = refs.filter(Boolean);
    if (!filteredRefs.length) return null;
    if (filteredRefs.length === 1) return filteredRefs[0];

    return (inst: any) => {
        for (const ref of filteredRefs) {
            if (typeof ref === "function") {
                ref(inst);
            } else if (ref) {
                ref.current = inst;
            }
        }
    };
};

export const cn = (obgClass: object, ...className: string[]) => {
    const result = [...className];
    for (const res of Object.entries(obgClass)) {
        if (res[1]) result.push(res[0]);
    }
    return result.join(" ");
};
