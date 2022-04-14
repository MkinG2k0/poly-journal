export declare type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export declare type Duration = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
export declare type flexDirection = "row" | "column";
export declare type alignContent = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch";
export declare type justifyContent = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
export declare type alignItems = "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
export interface IFlex {
    flexDirection?: flexDirection;
    alignContent?: alignContent;
    justifyContent?: justifyContent;
    alignItems?: alignItems;
}
