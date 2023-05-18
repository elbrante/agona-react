import React from 'react'
import cl from './HistoryItem.module.sass'
import circle from '../../../asserts/circleHistrory.svg'
import currency from '../../../asserts/currency.svg'
import {Icon} from '../../../components/ui/Icon/Icon'


interface Props {
    address: string;
    material1: string;
    material2: string;
    material3: string;
    data: string;
    points: number
}


export const HistoryItem = ({address, material1, material2, material3, data, points}: Props) => {
	return (
		<div className={cl.componentHistory}>
			<div className={cl.centerComponent}>
				<div className={cl.infoHistory}>
					<div className={cl.item}>
						<span className={cl.nameItem}>Адрес</span>
						<span className={cl.itemProps}>{address}</span>
					</div>
					<div className={cl.item}>
						<span className={cl.nameItem}>Материал</span>
						<div className={cl.materialItems}>
							<span className={cl.itemProps}>{material1}</span>
							<Icon icon={'circle'} width={20} height={20}/>
							<span className={cl.itemProps}>{material2}</span>
							<Icon icon={'circle'} width={20} height={20}/>
							<span className={cl.itemProps}>{material3}</span>
						</div>
					</div>
					<div className={cl.item}>
						<span className={cl.nameItem}>Дата</span>
						<span className={cl.itemProps}>{data}</span>
					</div>
				</div>
				<div className={cl.points}>
					<img src={currency} className={cl.currency} alt=""/>
					<span className={cl.points}>{points}</span>
				</div>
			</div>
		</div>
	)
}

