import React from 'react';
import cl from "../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass";

export const BrandCheck = () => {
    return (
        <div className={cl.brand}>
            <span className={cl.typeFilter}>Брэнд</span>
            <form>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Выбрать все</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>H&M</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>P&B</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Adidas</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Nike</span>
                </label>
                <label className={cl.label}>
                    <input type={"checkbox"} className={cl.checkbox}/>
                    <span className={cl.checkmark}></span>
                    <span>Reebok</span>
                </label>
            </form>
        </div>
    );
};

