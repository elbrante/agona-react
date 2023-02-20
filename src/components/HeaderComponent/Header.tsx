import React from 'react';
import cl from "../../components/HeaderComponent/Header.module.sass";
import EcoRUS from "../../asserts/EcoRUS.png";
import location from "../../asserts/location.svg";
import currency from "../../asserts/currency.svg";
import avatar from "../../asserts/avatar.svg";

export const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerLeft}>
                <img className={cl.headerEcoRus} src={EcoRUS} alt=""/>
                <nav className={cl.headerLeftNav}>
                    <a>Главная</a>
                    <a>Пункты сбора</a>
                    <a>ЭкоМаркет</a>
                    <a>О сервисе</a>
                </nav>
            </div>
            <nav className={cl.headerRight}>
                <div className={cl.headerRightNav}>
                    <a className={cl.headerRightLink}>
                        <img src={location} alt=""/>
                        Казань
                    </a>
                </div>
                <nav className={cl.headerRightNav}>
                    <a className={cl.headerRightLinkBold}>
                        <img src={currency} alt=""/>
                        1000
                    </a>
                    <a className={cl.headerRightLink}>
                        <img src={avatar} alt=""/>
                        Алексей
                    </a>
                </nav>
            </nav>
        </header>
    );
};
