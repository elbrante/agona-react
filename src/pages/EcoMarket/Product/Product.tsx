import React from 'react'
import cl from './Product.module.sass'
import currency from '../../../assets/currency.svg'


export interface ProductItem {
    img: string
    brandName: string
    name: string
    type: string
    price: number
}


export const Product = ({img, brandName, name, type, price}: ProductItem) => {
	return (
		<div className={cl.productComponent}>
			<img src={img} alt=""/>
			<div className={cl.brand}>
				<span className={cl.brandName}>{brandName}</span>
			</div>
			<div className={cl.descComponent}>
				<div className={cl.nameAndType}>
					<span className={cl.name}>{name}</span>
					<span className={cl.type}>{type}</span>
				</div>
				<div className={cl.price}>
					<img src={currency} alt=""/>
					<span className={cl.priceNumber}>{price}</span>
				</div>
			</div>
		</div>
	)
}

