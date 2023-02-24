import React from 'react';
import cl from "./FilterCheckBoxesStyles.module.sass";
import checkbox from "../../../asserts/check.svg";

export const CheckBox = () => {
    return (
        <div>
            <input type="checkbox" className={cl.checkbox}/>
            <div className={cl.checkmark}>
                <img className={cl.checkboxImg} src={checkbox} alt=""/>
            </div>
        </div>
    );
};

