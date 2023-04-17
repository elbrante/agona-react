import React from 'react'
import cl from '../FilterCheckBoxes/FilterCheckBoxesStyles.module.sass'
import {CheckBox} from './CheckBox'

export const TypeProductCheck = () => {
	return (
		<div className={cl.typeProduct}>
			<span className={cl.typeFilter}>Тип товара</span>
			<form>
				<label className={cl.label}>
					<CheckBox nameFilter="Выбрать все"/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='Одежда'/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='Обувь'/>
				</label>
				<label className={cl.label}>
					<CheckBox nameFilter='Аксессуары'/>
				</label>
			</form>
		</div>
	)
}

