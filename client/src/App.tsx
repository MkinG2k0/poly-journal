import {FC} from 'react';
import {Routes} from 'Routes/Routes';
import {BrowserRouter} from "react-router-dom";
import {Theme} from "./Lib/Lib";
import "normalize.css";
import 'Components/Style/Font.scss'
import "Components/Style/Colors.css";
import "Components/Style/Global.scss";

export const App: FC = () =>
    (
        <BrowserRouter>
            <Theme>
                <Routes isAuth={true}/>
            </Theme>
        </BrowserRouter>
    );
