export interface ITabsProps {
  components: Component;
  defaultId?: number;
  load?: boolean;
  typeB?: "button" | "submit";
  canMove?: boolean;
}

export interface ChooseCompProps {
  components: Component;
  id: number;
}

export type Component = {
  path: string;
  component: any;
  props?: any;
}[];

export interface TabButtonProps {
  path: string;
  index: number;
  active: boolean;
  setCurrentId: any;
  typeB?: "button" | "submit";
  canMove: boolean;
}
