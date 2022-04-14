declare type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
declare type AlignItems = "flex-start" | "center" | "flex-end";
declare type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
declare type Spacing = "sm" | "md" | "lg" | "none";
export interface GridProps {
    container?: boolean;
    item?: boolean;
    xs?: Cols;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    spacing?: Spacing;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    style?: any;
}
export {};
