import React from 'react'
import cl from '../Banner3/Banner3.module.sass'
import {ButtonBanner} from '../ButtonBanner/ButtonBanner'
import recycling3 from 'src/asserts/recycling-concept3.png'

export const Banner3 = () => {
	return (
		<div className={cl.banner}>
			<div className={cl.leftPart}>
				<div className={cl.text}>
					<div className={cl.title}>
                        Что с масками?
					</div>
					<div className={cl.subTitle}>
                        Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на
                        переработку.
					</div>
					<ButtonBanner type={'BANNER3'}>
                        Пункты сбора масок
					</ButtonBanner>
				</div>
			</div>
			<img className={cl.img} src={recycling3} alt="recycling"/>
		</div>
	)
}

