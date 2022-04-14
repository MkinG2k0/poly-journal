import type {RootState} from 'Interface/IStore'
import store from "./store";
import {useState, useEffect} from "react";

export function useStoreWithInitializer<T>(getter: (state: RootState) => T, initializer: () => unknown) {
    const [state, setState] = useState(getter(store.getState()));
    useEffect(() => {
        const unsubscribe = store.subscribe(() => setState(getter(store.getState())));
        initializer();
        return unsubscribe;
    }, []);
    return state;
}

export function useStore<T>(getter: (state: RootState) => T) {
    return useStoreWithInitializer(getter, () => {
    });
}
