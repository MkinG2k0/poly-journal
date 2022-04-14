import styles from "./Grid.module.scss";
import {GridProps} from "./IGrid";
import {FC} from "react";
import {cn} from "Helper/helper";

export const Grid: FC<GridProps> = ({
                                        children,
                                        container,
                                        item,
                                        xs,
                                        sm,
                                        md,
                                        lg,
                                        spacing = "none",
                                        justifyContent,
                                        alignItems,
                                        ...props
                                    }) => {
    const classNames = cn({
        [styles.Grid_container]: container,
        [styles[`Grid_container_spacing_${spacing}`]]: spacing,
        [styles.Grid_item]: item,
        [styles[`Grid_xs_${xs}_spacing_${spacing}`]]: xs,
        [styles[`Grid_sm_${sm}_spacing_${spacing}`]]: sm,
        [styles[`Grid_md_${md}_spacing_${spacing}`]]: md,
        [styles[`Grid_lg_${lg}_spacing_${spacing}`]]: lg,
        [styles[`Grid_spacing_${spacing}`]]: spacing,
        [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
        [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
    });

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
};
