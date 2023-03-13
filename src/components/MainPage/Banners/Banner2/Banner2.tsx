import React from 'react';
import cl from "../Banner2/Banner2.module.sass";
import {ButtonBanner} from "../ButtonBanner/ButtonBanner";
import recycling2 from "../../../../asserts/recycling-concept2.png";

export const Banner2 = () => {
    return (
        <div className={cl.banner}>
            <div className={cl.leftPart}>
                <div className={cl.text}>
                    <div className={cl.title}>
                        А вы знали...
                    </div>
                    <div className={cl.subTitle}>
                        что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?                     </div>
                </div>
                <ButtonBanner>
                    Узнать больше
                </ButtonBanner>
            </div>
            <img className={cl.img} src={recycling2} alt="recycling"/>
        </div>
    );
};

