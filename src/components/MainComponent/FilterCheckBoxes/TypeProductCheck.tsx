import React from 'react';
import cl from "../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass";
import {CheckBox} from "./CheckBox";

export const TypeProductCheck = () => {
    return (
        <div className={cl.typeProduct}>
            <span className={cl.typeFilter}>Тип товара</span>
            <form>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Выбрать все</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Одежда</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Обувь</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Аксессуары</span>
                </label>
            </form>
        </div>
    );
};

