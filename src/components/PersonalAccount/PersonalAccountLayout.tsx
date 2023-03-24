import React, {useState} from 'react';
import cl from './PersonalAccountLayout.module.sass'
import {CardClient} from "./CardClient/CardClient";
import {HistoryItem} from "./HistoryItem/HistoryItem";
import {HistoryList} from "./HistoryList/HistoryList";
import {PromoList} from "./PromoList";


export const PersonalAccountLayout = () => {

    const [visibleHistory, setVisibleHistory] = useState(true)
    const [visiblePromo, setVisiblePromo] = useState(false)

    function setStateHistory() {
        setVisiblePromo(false)
        setVisibleHistory(true)
    }

    function setStatePromo() {
        setVisibleHistory(false)
        setVisiblePromo(true)
    }

    return (
        <main className={cl.main}>
            <div className={cl.wrapperMain}>
                <span className={cl.personalAccount}>Личный кабинет</span>
                <div className={cl.mainWrapper}>
                    <CardClient/>
                    <div className={cl.navWrapper}>
                        <nav className={cl.navLink}>
                            <a onClick={setStatePromo}>Промокоды</a>
                            <a onClick={setStateHistory}>История</a>
                        </nav>
                        <HistoryList state={visibleHistory}/>
                        <PromoList state={visiblePromo}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

