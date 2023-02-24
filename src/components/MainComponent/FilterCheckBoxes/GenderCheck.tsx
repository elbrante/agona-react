import React from 'react';
import cl from "../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass";
import {CheckBox} from "./CheckBox";

export const GenderCheck = () => {
    return (
        <div className={cl.genderCheck}>
            <span className={cl.typeFilter}>Пол</span>
            <form>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Мужской</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Женский</span>
                </label>
            </form>
        </div>
    );
};

