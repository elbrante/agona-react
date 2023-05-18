import React from 'react'
import cl from './FilterCheckBoxesStyles.module.sass'
import {Icon} from '../../../components/ui/Icon/Icon'

interface CheckBox {
    nameFilter: string
}


export const CheckBox = ({nameFilter}: CheckBox) => {
	return (
		<div className={cl.wrapperCheck}>
			<input type="checkbox" className={cl.checkbox}/>
			<div className={cl.checkmark}>
				<Icon icon={'check'} width={16}/>
			</div>
			<span>{nameFilter}</span>
		</div>
	)
}

