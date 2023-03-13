import React from 'react';
import cl from "../../Banners/Banner1/Banner1.module.sass";
import recycling from "../../../../asserts/recycling-concept.png";
import {ButtonBanner} from "../ButtonBanner/ButtonBanner";

export const Banner1 = () => {
    return (
        <div className={cl.banner}>
            <div className={cl.leftPart}>
                <div className={cl.text}>
                    <div className={cl.title}>
                        Сделаем мир чище
                    </div>
                    <div className={cl.subTitle}>
                        Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов
                    </div>
                </div>
                <ButtonBanner>
                    Условия сервиса
                </ButtonBanner>
            </div>
            <img className={cl.img} src={recycling} alt="recycling"/>
        </div>
    );
};

