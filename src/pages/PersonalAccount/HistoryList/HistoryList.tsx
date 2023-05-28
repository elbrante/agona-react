import React from 'react'
import {HistoryItem} from '../HistoryItem/HistoryItem'
import cl from './HistoryList.module.sass'

interface Props {
    state: boolean
}


export const HistoryList = ({state}: Props) => {
	return (
		<div>
			{state ?
				<div className={cl.historyList}>
					<HistoryItem
						address={'Казань, Кремлёвская, 88'}
						materials={['Пластик: 1 кг', 'Стекло: 2 кг', 'Бумага: 25 кг']}
						data={'25.09.2021'}
						points={1000}
					/>
					<HistoryItem
						address={'Казань, Кремлёвская, 88'}
						materials={['Пластик: 1 кг', 'Стекло: 2 кг', 'Бумага: 25 кг']}
						data={'25.09.2021'}
						points={1000}
					/>
				</div>
				:
				null
			}
		</div>

	)
}
