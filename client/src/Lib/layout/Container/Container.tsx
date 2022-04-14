import Style from "./Container.module.scss";

export function Container({ children }) {
  return <div className={Style.container}>{children}</div>;
}
