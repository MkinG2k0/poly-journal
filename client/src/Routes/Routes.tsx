import {Route, Routes as Switch, Navigate} from 'react-router-dom'
import {Path, R_Auth, R_Home, R_Subjects} from "./Route";
import {Auth} from "../Pages/Auth/Auth";
import {Layout} from "Components/Layout/Layout";
import {FC} from 'react';
import {IRoute} from "./IRoute";

interface RoutesProps {
    isAuth: boolean
}

export const Routes: FC<RoutesProps> = ({isAuth}) => {

    if (isAuth) return (
        <Switch>
            <Route path={'/'} element={<Layout/>}>
                {Path.map(({path, Element}, index) =>
                    <Route key={index} path={path} element={<Element/>}/>)}
                <Route path={'/'} element={<Navigate to={R_Subjects}/>}/>
                <Route path={'*'} element={<Navigate to={R_Home}/>}/>
            </Route>

        </Switch>)

    return (
        <Switch>
            <Route path={R_Auth} element={<Auth/>}/>
            <Route path={'*'} element={<Navigate to={R_Auth}/>}/>
        </Switch>)
}

function NavRoute({path, Element}: IRoute) {
    return <Route path={path} element={<Element/>}/>
}

