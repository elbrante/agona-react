import React, {FC} from 'react';
import cl from "./FilterCheckBoxesStyles.module.sass";
import checkbox from "../../../asserts/check.svg";

interface CheckBox {
    nameFilter: string
}



export const CheckBox = ({nameFilter}: CheckBox) => {
    return (
        <div className={cl.wrapperCheck}>
            <input type="checkbox" className={cl.checkbox}/>
            <div className={cl.checkmark}>
                <img className={cl.checkboxImg} src={checkbox} alt=""/>
            </div>
            <span>{nameFilter}</span>
        </div>
    );
};

