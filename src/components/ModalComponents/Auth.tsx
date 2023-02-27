import React, {useEffect, useState} from 'react';
import cl from '../ModalComponents/Auth.module.sass'
import X from '../../asserts/крестик.svg'
import {createPortal} from "react-dom";
import {Portal} from "./Portal/Portal";

interface ModalAuth {
    visible: boolean;
    onClose: () => void;
}

export const Auth = ({visible, onClose}: ModalAuth) => {

    if (visible) return <></>

    return (
        <Portal>
            <div className={cl.overlay} onClick={onClose}>
                <div className={cl.wrapperAuth}>
                    <form className={cl.auth}>
                        <div className={cl.authHeader}>
                            <span>Вход</span>
                            <img src={X} alt=""/>
                        </div>
                        <div className={cl.authMain}>
                            <div className={cl.fields}>
                                <input className={cl.number} placeholder={'Телефон'}/>
                                <input className={cl.password} placeholder={'Пароль'}/>
                            </div>
                            <div className={cl.login}>
                                <button>Войти</button>
                                <div className={cl.loginWithSmsOrRegistration}>
                                    <span>
                                        Войти с помощью смс
                                    </span>
                                    <span>
                                        Регистрация
                                    </span>
                                </div>
                            </div>
                            <button className={cl.loginForPartner}>
                                Вход для партнёров
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Portal>
    );
};

