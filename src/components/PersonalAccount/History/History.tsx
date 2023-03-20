import React from 'react';
import cl from './History.module.sass'
import circle from '../../../asserts/circleHistrory.svg'

export const History = () => {
    return (
        <div className={cl.componentHistory}>
            <div className={cl.centerComponent}>
                <div className={cl.infoHistory}>
                    <div className={cl.item}>
                        <span className={cl.nameItem}>Адрес</span>
                        <span className={cl.itemProps}>Казань, Кремлёвская, 88</span>
                    </div>
                    <div className={cl.item}>
                        <span className={cl.nameItem}>Материал</span>
                        <div className={cl.materialItems}>
                            <span className={cl.itemProps}>Пластик: 1 кг</span>
                            <img src={circle}/>
                            <span className={cl.itemProps}>Стекло: 2 кг</span>
                            <img src={circle}/>
                            <span className={cl.itemProps}>Бумага: 25 кг</span>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <span className={cl.nameItem}>Дата</span>
                        <span className={cl.itemProps}>25.09.2021</span>
                    </div>
                </div>
                <span className={cl.points}>1000</span>
            </div>
        </div>
    );
};

