import React, {useState} from 'react';
import cl from './PersonalAccountLayout.module.sass'
import {CardClient} from "./CardClient/CardClient";
import {HistoryItem} from "./HistoryItem/HistoryItem";
import {HistoryList} from "./HistoryList";


export const PersonalAccountLayout = () => {

    const [visibleHistory, setVisibleHistory] = useState(true)

    return (
        <main className={cl.main}>
            <div className={cl.wrapperMain}>
                <span className={cl.personalAccount}>Личный кабинет</span>
                <div className={cl.mainWrapper}>
                    <CardClient/>
                    <div className={cl.navWrapper}>
                        <nav className={cl.navLink}>
                            <a onClick={() => setVisibleHistory(false)}>Промокоды</a>
                            <a>История</a>
                        </nav>
                        <HistoryList state={visibleHistory}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

