import {IRoute} from "./IRoute";
import {Main} from "../Pages/Main/Main";
import {Subjects} from "../Pages/Subjects/Subjects";
import {Home} from "../Pages/Home/Home";
import {Book} from "../Pages/Book/Book";
import {App} from "../Pages/App/App";
import {Bag} from "../Pages/Bag/Bag";
import {Chat} from "../Pages/Chat/Chat";
import {Task} from "../Pages/Task/Task";
import {Contacts} from "../Pages/Contacts/Contacts";
import {Settings} from "../Pages/Settings/Settings";
import {Subject} from "../Pages/Subjects/Subject/Subject";

export const R_Auth = '/auth'
export const R_Home = '/home'
export const R_Subjects = '/subjects'
export const R_Subject = '/subject:name'
export const R_Subject_Name = '/subject'
export const R_Bag = '/bag'
export const R_Book = '/book'
export const R_App = '/app'
export const R_Chat = '/chat'
export const R_Task = '/task'
export const R_Contacts = '/contacts'
export const R_Settings = '/settings'

export const Path: IRoute[] = [
    {path: R_Home, Element: Home},
    {path: R_Subjects, Element: Subjects},
    {path: R_Subject, Element: Subject},
    {path: R_Bag, Element: Bag},
    {path: R_Book, Element: Book},
    {path: R_App, Element: App},
    {path: R_Chat, Element: Chat},
    {path: R_Task, Element: Task},
    {path: R_Contacts, Element: Contacts},
    {path: R_Settings, Element: Settings},
]