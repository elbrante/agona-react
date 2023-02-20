import React from 'react';
import cl from "../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass";

export const TypeProductCheck = () => {
    return (
        <div className={cl.typeProduct}>
            <span className={cl.typeFilter}>Тип товара</span>
            <form>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Выбрать все</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Одежда</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Обувь</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Аксессуары</span>
                </label>
            </form>
        </div>
    );
};

