import React, {FC} from 'react'
import {ProductItem, Product} from '../Product/Product'
import cl from '../ArrayProducts/ArrayProducts.module.sass'
import currency from '../../../asserts/currency.svg'


interface ProductsList {
    productsList: Array<ProductItem>
}


export const ArrayProducts: FC<ProductsList> = ({productsList}: ProductsList) => {
	return (
		<div className={cl.arrayProducts}>
			<div className={cl.balance}>
				<div className={cl.descBalance}>
					<div className={cl.numberBalance}>
						<span className={cl.textBalance}>На вашем балансе</span>
						<div className={cl.currencyNumberBalance}>
							<img className={cl.currencyBalance} src={currency} alt=""/>
							<span className={cl.numberCurrency}>200</span>
						</div>
					</div>
					<div className={cl.abilityBalance}>
                        Вы можете обменять их на скидку 200 руб.
					</div>
				</div>

				<button>
                    Получить промокод
				</button>
			</div>
			{productsList.map((product: ProductItem) => {
				return <Product
					img={product.img}
					brandName={product.brandName}
					name={product.name}
					type={product.type}
					price={product.price}
					key={product.price}
				/>
			})
			}
		</div>
	)
}

