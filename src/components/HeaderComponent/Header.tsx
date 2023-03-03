import React, {useState} from 'react';
import cl from "../../components/HeaderComponent/Header.module.sass";
import EcoRUS from "../../asserts/EcoRUS.png";
import location from "../../asserts/location.svg";
import currency from "../../asserts/currency.svg";
import avatar from "../../asserts/avatar.svg";
import {Auth} from "../AuthModal/Auth";
import {NavLink} from "react-router-dom";
import cn from "classnames";

export const Header = () => {

    const [modalAuth, setModalAuth] = useState(false)

    return (
        <header className={cl.header}>
            <div className={cl.headerLeft}>
                <img className={cl.headerEcoRus} src={EcoRUS} alt=""/>
                <nav className={cl.headerLeftNav}>
                    <NavLink
                        to={'/main'}
                        className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                        Главная
                    </NavLink>

                    <NavLink
                        to={'/colpoints'}
                        className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                    Пункты сбора
                    </NavLink>

                    <NavLink
                        to={'/ecomarket'}
                        className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                    ЭкоМаркет
                    </NavLink>

                    <NavLink
                        to={'/about'}
                        className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                    О сервисе
                    </NavLink>
                </nav>
            </div>
            <nav className={cl.headerRight}>
                <div className={cl.headerRightNav}>
                    <a className={cl.headerRightLink}>
                        <img src={location} alt=""/>
                        Казань
                    </a>
                </div>
                <nav className={cl.headerRightNav} onClick={() => setModalAuth(true)}>
                    <a className={cl.headerRightLinkBold}>
                        <img src={currency} alt=""/>
                        1000
                    </a>
                    <a className={cl.headerRightLink}>
                        <img src={avatar} alt=""/>
                        Алексей
                    </a>
                </nav>
                <Auth modalAuth={modalAuth} closeModal={() => setModalAuth(false)}/>
            </nav>
        </header>
    );
};
