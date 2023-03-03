import React, {useState} from 'react';
import cl from "./Main.module.sass"
import {Button} from "./ButtonFilter/Button";
import {ArrayProducts} from "./ArrayProducts/ArrayProducts";



import NikeAirMax2021 from '../../asserts/imgProduct/NikeAirMax2021.png'
import NikeAirMax90Premium from '../../asserts/imgProduct/NikeAirMax90Premium.png'
import AdidasAlphabounceRC from '../../asserts/imgProduct/AdidasAlphabounceRC.png'
import HMAirMax2021 from '../../asserts/imgProduct/H&MAirMax2021.png'
import NikeAirForce1Low from '../../asserts/imgProduct/NikeAirForce1Low.png'
import {GenderCheck} from "./FilterCheckBoxes/GenderCheck";
import {TypeProductCheck} from "./FilterCheckBoxes/TypeProductCheck";
import {BrandCheck} from "./FilterCheckBoxes/BrandCheck";
import {Auth} from "../AuthModal/Auth";



const arrayComponentsProducts = [
    {img: NikeAirMax2021, brandName: 'NIKE', name: 'Nike Air Max 2021', type: 'Мужская обувь', price: 1000},
    {img: NikeAirMax90Premium, brandName: 'NIKE', name: 'Nike Air Max 90 Premium', type: 'Мужская обувь', price: 750},
    {img: AdidasAlphabounceRC, brandName: 'Adidas', name: 'Adidas Alphabounce RC', type: 'Мужская обувь', price: 1200},
    {img: HMAirMax2021, brandName: 'H&M', name: 'Nike Air Max 2021', type: 'Мужская обувь', price: 1000},
    {img: NikeAirForce1Low, brandName: 'NIKE', name: 'Nike Air Force 1 Low', type: 'Мужская обувь', price: 2100}
]



export const Main = () => {

    // const [modalAuth, setModalAuth] = useState(false)
    //
    // function openModal() {
    //     setModalAuth(true)
    // }
    //
    // function closeModal() {
    //     setModalAuth(false)
    // }


    return (
        <main className={cl.mainMarket}>
            <div className={cl.divUnderHeader}>
                <span className={cl.nameMarket}>ЭкоМаркет</span>
                <nav className={cl.navButton}>
                    <Button nameFilter={"По популярности"}/>
                    <Button nameFilter={"По цене"}/>
                    <Button nameFilter={"По новизне"}/>
                </nav>
            </div>

            <div className={cl.mainBlock}>
                <div className={cl.filterCheckBox}>
                    <GenderCheck/>
                    <TypeProductCheck/>
                    <BrandCheck/>
                    <button className={cl.resetFilter}>Сбросить фильтры</button>
                </div>
                <ArrayProducts arrayProducts={arrayComponentsProducts}/>
            </div>

        </main>
    );
};

