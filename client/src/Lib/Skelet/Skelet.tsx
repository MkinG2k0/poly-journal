import Style from "./Skelet.module.scss";
import {SkeletProps, SkeletTextArrProps, SkeletTextProps} from "./ISkelet";
import {useRandArr} from "Hook/Rand.hook";
import {Effect} from "../Effect/Effect";
import {FC} from "react";
import {cn} from "Helper/helper";

export const Skelet: FC<SkeletProps> = ({
                                            children,
                                            width,
                                            height,
                                            status,
                                            border,
                                            classSkelet,
                                            duration,
                                        }) => {
    const skeletClass = cn(
        {
            [classSkelet]: classSkelet,
            [Style["border-" + border]]: border,
        },
        Style.skelet
    );

    if (status) return <>{children}</>;

    return (
        <Effect
            type={"fade"}
            open={true}
            width={width}
            height={height}
            duration={duration}
        >
            {!status && <div className={skeletClass} style={{width, height}}/>}
        </Effect>
    );
};

Skelet.defaultProps = {
    status: false,
    border: 1,
    height: "1em",
    width: "100%",
    duration: 300,
};

// @SkeletText

export const SkeletText: FC<SkeletTextProps> = ({
                                                    children,
                                                    width,
                                                    status,
                                                    sizeFont,
                                                    border,
                                                    duration,
                                                }) => {
    const skeletClass = cn({[Style["border-" + border]]: border}, Style.skelet);

    const spanClass = cn({
        ["f-" + sizeFont]: sizeFont,
    });

    if (status) return <>{children}</>;

    return (
        <Effect
            type={"fade"}
            open={!Boolean(status)}
            width={width}
            duration={duration}
        >
            <div className={skeletClass} style={{width: width}}>
                <span className={spanClass}>{"⁣"}</span>
            </div>
        </Effect>
    );
};

SkeletText.defaultProps = {
    status: false,
    border: 3,
    duration: 300,
};

// @SkeletText Arr

export const SkeletTextArr: FC<SkeletTextArrProps> = ({
                                                          children,
                                                          status,
                                                          row,
                                                          classSkelet,
                                                          ...props
                                                      }) => {
    if (status) return <>{children}</>;

    const rand = useRandArr(50, 100, row);

    return (
        <div className={"flex col gap-1 "}>
            {rand.map((item, index) => (
                <SkeletText {...props} width={item + "%"} status={status} key={index}/>
            ))}
        </div>
    );
};

SkeletTextArr.defaultProps = {
    status: false,
    row: 1,
};
