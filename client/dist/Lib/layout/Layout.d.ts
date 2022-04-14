import { ReactNode } from "react";
import { FC } from "react";
interface LayoutProps {
    children?: ReactNode;
    HeadNode?: ReactNode | null;
    title?: string | "Title";
}
export declare const Layout: FC<LayoutProps>;
export {};
