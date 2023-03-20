import React from 'react';
import cl from './Main.module.sass'
import {CardClient} from "./CardClient/CardClient";
import {History} from "./History/History";

export const Main = () => {
    return (
        <main className={cl.main}>
            <span className={cl.namePage}>Личный кабинет</span>
            <div className={cl.underMain}>
                <CardClient/>
                <History/>
            </div>
        </main>
    );
};

