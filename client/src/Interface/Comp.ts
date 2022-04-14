export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Duration =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000;

export type flexDirection = "row" | "column";

export type alignContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "stretch";
export type justifyContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type alignItems =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";

export interface IFlex {
  flexDirection?: flexDirection;
  alignContent?: alignContent;
  justifyContent?: justifyContent;
  alignItems?: alignItems;
}
