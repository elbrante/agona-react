import React from 'react'
import cl from './HistoryItem.module.sass'
import circle from '../../../asserts/circleHistrory.svg'
import currency from '../../../asserts/currency.svg'
import {Icon} from '../../../components/ui/Icon/Icon'
import {array} from 'yup'


interface Props {
    address: string;
    materials: Array<string>;
    data: string;
    points: number
}


export const HistoryItem = ({address, data, points, materials}: Props) => {
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
							{materials.map((material, index) => {
								return <>
									<span
										key={materials.indexOf(material)}
										className={cl.itemProps}>
									    {material}
								    </span>
									{index != materials.length - 1 && <Icon icon={'circle'} width={20} height={20}/>}
								</>
							})}
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

