import {useEffect, useState} from "react";
import {getArr, getRand} from "Helper/helper";

export function useRand(min = 30, max = 100): number {
    const [state, setState] = useState(0);

    useEffect(() => {
        setState(getRand(min, max));
    }, []);

    return state;
}

export function useRandArr(min = 50, max = 100, length = 1): Array<number> {
    const [state, setState] = useState([]);

    useEffect(() => {
        getArr(length).map(() => {
            setState((prevState) => [...prevState, getRand(min, max)]);
        });
    }, []);

    return state;
}
