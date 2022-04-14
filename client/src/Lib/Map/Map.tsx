import { MapProps } from "./IMap";
import { FC } from "react";

export const Map: FC<MapProps> = ({ data, Comp, spread, keyName }) => {
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <Comp
              {...item}
              {...spread}
              index={index}
              key={`map-${index}-${
                item ? (keyName in item ? item[keyName] : "none") : ""
              }`}
            />
          );
        })}
    </>
  );
};

// TODO : придумать реализацию id + key && item[key]

Map.defaultProps = { keyName: "id" };
