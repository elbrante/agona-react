import React from 'react';
import cl from './Main.module.sass'
import item1 from '../../asserts/item1.svg'
import item2 from '../../asserts/item2.svg'
import {Item} from "./Item/Item";
import {Slider} from "./Slider/Slider";
import {Banner1} from "./Banners/Banner1/Banner1";




export const Main = () => {
    return (
        <div className={cl.main}>

            <Slider/>
            {/*<Banner1/>*/}

            <div className={cl.items}>
                <Item title={'Пункты сбора'}
                      subTitle={'Посмотри, где в твоем городе можно сдать вторсырье на переработку'}
                      img={item1}
                      type={"leftImg"}

                />
                <Item title={'ЭкоМаркет'}
                      subTitle={'Используй заработанные экокоины для покупки товаров из переработанных материалов'}
                      img={item2}
                      type={"rightImg"}
                />
            </div>
        </div>
    );
};

