import {Route, Routes as Switch, Navigate} from 'react-router-dom'
import {Subjects} from "../Pages/Subjects/Subjects";
import {R_AUTH, R_SUBJECT} from "./Route";
import {Auth} from "../Pages/Auth/Auth";
import {Layout} from "Components/Layout/Layout";
import {Map} from "Lib/Lib";
import {FC} from 'react';

interface RoutesProps {
    isAuth: boolean
}

export const Routes: FC<RoutesProps> = ({isAuth}) => {

    if (isAuth) return (
        <Switch>
            <Route path={'/'} element={<Layout/>}>
                <Route path={R_SUBJECT} element={<Subjects/>}/>
                <Route path={'*'} element={<Navigate to={R_SUBJECT}/>}/>
            </Route>
            <Route path={'*'} element={<Navigate to={R_SUBJECT}/>}/>
        </Switch>)

    return (
        <Switch>
            <Route path={R_AUTH} element={<Auth/>}/>
            <Route path={'*'} element={<Navigate to={R_AUTH}/>}/>
        </Switch>)
}

function NavRoute({path, element}) {
    const Comp = element
    return <Route path={path} element={<Comp/>}/>
}

