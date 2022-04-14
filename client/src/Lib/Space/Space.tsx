import { SpaceProps } from "./ISpace";
import { FC } from "react";

export const Space: FC<SpaceProps> = ({ x, y, children }) => {
  return (
    <div style={{ margin: `${y / 3}em ${x / 3}em`, width: "100%" }}>
      {children}
    </div>
  );
};

Space.defaultProps = {
  x: 0,
  y: 0,
};
