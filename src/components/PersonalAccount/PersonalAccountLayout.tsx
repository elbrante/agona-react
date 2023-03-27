import React, {useState} from 'react';
import cl from './PersonalAccountLayout.module.sass'
import {CardClient} from "./CardClient/CardClient";
import {HistoryList} from "./HistoryList/HistoryList";
import {PromoList} from "./PromoList/PromoList";
import {LinkActive} from "./LinkActive/LinkActive";


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
                            <LinkActive onClick={setStatePromo} state={visiblePromo}>Промокоды</LinkActive>
                            <LinkActive onClick={setStateHistory} state={visibleHistory}>История</LinkActive>
                        </nav>
                        <HistoryList state={visibleHistory}/>
                        <PromoList state={visiblePromo}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

