import {useEffect, useRef, useState} from "react";
import {useEffectSkipMount} from "Hook/Hooks";

export const useFocus = (initialRef = null) => {
    const ref = useRef(initialRef);
    const [isFocus, setFocus] = useState(false);

    useEffect(() => {
        ref.current.addEventListener("blur", () => setFocus(false));
        ref.current.addEventListener("focus", () => setFocus(true));
        return () => {
            //TODO:При анмунте ошибка
            if (ref.current) {
                ref.current.removeEventListener("blur", null);
                ref.current.removeEventListener("focus", null);
            }
        };
    }, []);

    const onFocus = (type?: boolean) => {
        if (ref.current) {
            if (type === undefined) {
                if (ref.current.focus) ref.current.blur();
                else ref.current.focus();
            }
            if (type === true) ref.current.focus();
            if (type === false) ref.current.blur();
        }
    };

    return {ref, onFocus, isFocus};
};

interface useInputProps {
    (
        initialRef: HTMLInputElement,
        text: string,
        name: string,
        eventChange: (value: string, name: string, ref: any) => void,
        speedUpdate?: number
    ): { ref: any; spread: { onChange: any; value: any } };
}

export const useInput: useInputProps = (
    initialRef: any,
    text = "",
    name,
    eventChange,
    speedUpdate = 500
) => {
    const ref = useRef(initialRef);
    const [value, setValue] = useState<string>(text);

    useEffectSkipMount(() => {
        const timeOutId = setTimeout(
            eventChange,
            speedUpdate,
            value,
            name,
            ref.current
        );
        return () => clearTimeout(timeOutId);
    }, [value]);

    function onChange(e) {
        setValue(e.target.value);
    }

    return {
        ref,
        spread: {
            onChange,
            value,
        },
    };
};

export const useHover = (refInit = null) => {
    const ref = useRef(refInit);
    const [isHovering, setHovering] = useState(false);

    const on = () => setHovering(true);
    const off = () => setHovering(false);

    useEffect(() => {
        if (!ref.current) return undefined;

        const node = ref.current;

        node.addEventListener("mouseenter", on);
        node.addEventListener("mouseleave", off);

        return () => {
            node.removeEventListener("mouseenter", on);
            node.removeEventListener("mouseleave", off);
        };
    }, []);

    return {isHovering, ref};
};
