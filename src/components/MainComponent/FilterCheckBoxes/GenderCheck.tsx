import React from 'react';
import cl from "../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass";

export const GenderCheck = () => {
    return (
        <div className={cl.genderCheck}>
            <span className={cl.typeFilter}>Пол</span>
            <form>
                <label className={cl.label}>
                    <input type="checkbox" className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Мужской</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Женский</span>
                </label>
            </form>
        </div>
    );
};

