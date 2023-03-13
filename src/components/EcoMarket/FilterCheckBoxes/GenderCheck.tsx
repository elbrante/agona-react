import React from 'react';
import cl from "../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass";
import {CheckBox} from "./CheckBox";

export const GenderCheck = () => {
    return (
        <div className={cl.genderCheck}>
            <span className={cl.typeFilter}>Пол</span>
            <form>
                <label className={cl.label}>
                    <CheckBox nameFilter='Мужской'/>
                </label>
                <label className={cl.label}>
                    <CheckBox nameFilter='Женский'/>
                </label>
            </form>
        </div>
    );
};

