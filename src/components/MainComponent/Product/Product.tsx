import React, {FC} from 'react';
import cl from "./Product.module.sass"
import currency from '../../../asserts/currency.svg'


export interface InterfaceProduct {
    img: string
    brandName: string
    name: string
    type: string
    price: number
}


export const Product: FC<InterfaceProduct> = (props: InterfaceProduct) => {
    return (
        <div className={cl.productComponent}>
            <img src={props.img} alt=""/>
            <div className={cl.brand}>
                <span className={cl.brandName}>{props.brandName}</span>
            </div>
            <div className={cl.descComponent}>
                <div className={cl.nameAndType}>
                    <span className={cl.name}>{props.name}</span>
                    <span className={cl.type}>{props.type}</span>
                </div>
                <div className={cl.price}>
                    <img src={currency} alt=""/>
                    <span className={cl.priceNumber}>{props.price}</span>
                </div>
            </div>
        </div>
    );
};

