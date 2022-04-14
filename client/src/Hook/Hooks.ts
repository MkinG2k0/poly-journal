import {useEffect, useRef, useState} from "react";

export const useToggle = (initState = false) => {
    const [toggle, setState] = useState(initState);

    function setToggle(state?: boolean) {
        if (state) setState(state)
        else setState(prevState => !prevState)
    }

    return {toggle, setToggle}
}


export function useEffectSkipMount(cd, deps) {
    const mounted = useRef(true)

    useEffect(() => {
        if (!mounted.current) cd()
        mounted.current = false
    }, [deps]);
}




