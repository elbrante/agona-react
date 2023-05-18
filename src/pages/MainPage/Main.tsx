import React from 'react'
import cl from './Main.module.sass'
import item1 from '../../asserts/item1.svg'
import item2 from '../../asserts/item2.svg'
import {Card} from './Card/Card'
import {Slider} from './Slider/Slider'


export const Main = () => {
	return (
		<div className={cl.main}>
			<Slider/>
			<div className={cl.items}>
				<Card title={'Пункты сбора'}
					subTitle={'Посмотри, где в твоем городе можно сдать вторсырье на переработку'}
					img={item1}
					typeImg={'leftImg'}
					linkTo={'/colpoints'}

				/>
				<Card title={'ЭкоМаркет'}
					subTitle={'Используй заработанные экокоины для покупки товаров из переработанных материалов'}
					img={item2}
					typeImg={'rightImg'}
					linkTo={'/ecomarket'}
				/>
			</div>
		</div>
	)
}

