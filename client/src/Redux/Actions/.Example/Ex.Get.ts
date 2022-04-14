import {useStore} from "../../Store/Redux.hooks";

export const GetData = () => useStore(({_persist}) => _persist)

export {}