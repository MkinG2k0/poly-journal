import styles from "./Grid.module.scss";
import {GridProps} from "./IGrid";
import {createContext, FC, useContext} from "react";
import {cn} from "Helper/helper";

const Spacing = createContext('none')

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
        [styles[`Grid_xs_${xs}`]]: xs,
        [styles[`Grid_sm_${sm}`]]: sm,
        [styles[`Grid_md_${md}`]]: md,
        [styles[`Grid_lg_${lg}`]]: lg,
        [styles[`Grid_spacing_${spacing}`]]: spacing,
        [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
        [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
    });

    return (
        <div className={classNames} {...props}>
            <Spacing.Provider value={spacing}>
                {children}
            </Spacing.Provider>
        </div>
    );
};

export const Row: FC = ({children}) => {
    const context = useContext(Spacing);

    return (<div>
        {children}
    </div>)
}
