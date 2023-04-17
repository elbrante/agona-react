import React from 'react'
import cl from '../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass'
import {CheckBox} from './CheckBox'

export const BrandCheck = () => {
	return (
		<div className={cl.brand}>
			<span className={cl.typeFilter}>Брэнд</span>
			<form>
				<label className={cl.label}>
					<CheckBox nameFilter="Выбрать все"/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='H&M'/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='P&B'/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='Adidas'/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='Nike'/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='Reebok'/>
				</label>
			</form>
		</div>
	)
}

