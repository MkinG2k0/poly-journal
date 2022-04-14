import {useEffect, useState} from "react";
import {useToggle} from "Hook/Hooks";

export const useLogger = (value: any, textLog = "logger : "): void => {
    useEffect(() => {
        console.log(textLog, value);
    }, [value]);
};

export const useTimeOut = (value: any, event: () => void, duration = 1) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            event();
        }, duration);

        return () => clearTimeout(timer);
    }, [value]);
};

export const useToggleTime = (initValue: boolean = false, duration: number = 0) => {
    const {toggle, setToggle} = useToggle(initValue);

    useTimeOut(
        initValue,
        () => {
            setToggle();
        },
        duration
    );

    return toggle;
};

export const usePrev = (data: any, status: any, desirable: number) => {
    const [perView, setPerView] = useState(desirable);

    useEffect(() => {
        setPerView(Math.min(data?.length || perView, perView));
    }, [status]);

    return perView;
};
