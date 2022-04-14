import style from "./Tabs.module.scss";
import {ChooseCompProps, ITabsProps, TabButtonProps} from "./ITabs";
import {FC, useState, memo} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-Icons";
import {cn} from "Helper/helper";

export const Tabs: FC<ITabsProps> = memo(
    ({components, children, defaultId = 0, load, typeB, canMove}) => {
        const [currentId, setCurrentId] = useState(defaultId);

        return (
            <div className={style.wrap}>
                <div className={style.tab}>
                    {components.map((comp, index) => {
                        return (
                            <TabButton
                                path={comp.path}
                                index={index}
                                setCurrentId={setCurrentId}
                                active={currentId === index}
                                key={comp.path}
                                canMove={canMove}
                                typeB={typeB}
                            />
                        );
                    })}
                </div>
                <div className={"style.wrapEdite"}>
                    {load && <ChooseComp components={components} id={currentId}/>}
                    {!load && (
                        <div className={"center"} style={{height: "50vh"}}>
                            {/*<FontAwesomeIcon*/}
                            {/*  icon={faSpinner}*/}
                            {/*  spin={true}*/}
                            {/*  className={Style.spinner}*/}
                            {/*/>*/}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        );
    }
);

Tabs.defaultProps = {
    typeB: "button",
    canMove: true,
};

const ChooseComp: FC<ChooseCompProps> = ({components, id}) => {
    if (!components[id]) return null;
    const Comp = components[id].component;
    return <Comp {...components[id].props} />;
};

const TabButton: FC<TabButtonProps> = ({
                                           path,
                                           index,
                                           active,
                                           setCurrentId,
                                           typeB,
                                           canMove,
                                       }) => {
    const classButton = cn({
        [style.nav]: true,
        [style.active]: active,
    });

    function onClick() {
        if (canMove) setCurrentId(index);
    }

    return (
        <input
            type={typeB}
            className={classButton}
            onClick={onClick}
            value={path}
        />
    );
};
