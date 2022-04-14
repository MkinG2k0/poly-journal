import {useEffect, useState} from "react";

interface useMediaProps {
    (width: number,
     or?: 'max' | 'min'): boolean | undefined
}

export const useMedia: useMediaProps = (width, or = 'min') => {
    const [state, setState] = useState(undefined);

    const handler = e => setState(e.matches);

    useEffect(() => {
        setState(window.matchMedia(`(${or}-width: ${width}px)`).matches)
        window.matchMedia(`(${or}-width: ${width}px)`).addEventListener('change', handler);
        return () => {
            window.matchMedia(`(${or}-width: ${width}px)`).removeEventListener('change', handler);
        };
    }, []);

    return state
}

interface useArrMediaProps {
    (arrWidth: number[], handler: (width: number, on: boolean) => void): void
}

export const useOnArrMedia: useArrMediaProps = (arrWidth, handler) => {
    useEffect(() => {
        arrWidth.map((width) => {
            return window.matchMedia(`(min-width: ${width}px)`).addEventListener('change', (e) => handler(width, e.matches));
        })

        return () => {
            arrWidth.map(width => {
                return window.matchMedia(`(min-width: ${width}px)`).removeEventListener('change', (e) => handler(width, e.matches));
            })
        };
    }, []);
}

export const useArrValueMedia = (arrWidth: number[], initValue: number) => {
    const [state, setState] = useState(initValue);

    const handler = (width, on) => {
        if (on) setState(prevState => prevState + 1);
        else setState(prevState => prevState - 1);
    }

    useOnArrMedia(arrWidth, handler)

    useEffect(() => {
        arrWidth.map((width) => {
            if (!window.matchMedia(`(min-width: ${width}px)`).matches) setState(prevState => prevState - 1);
            return undefined;
        })
    }, []);

    return state
}