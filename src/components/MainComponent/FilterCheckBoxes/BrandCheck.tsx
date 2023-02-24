import React from 'react';
import cl from "../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass";
import {CheckBox} from "./CheckBox";

export const BrandCheck = () => {
    return (
        <div className={cl.brand}>
            <span className={cl.typeFilter}>Брэнд</span>
            <form>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Выбрать все</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>H&M</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>P&B</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Adidas</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Nike</span>
                </label>
                <label className={cl.label}>
                    <CheckBox/>
                    <span>Reebok</span>
                </label>
            </form>
        </div>
    );
};

