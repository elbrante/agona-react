import React from 'react'
import cl from '../Item/Item.module.sass'
import button from '../../../asserts/button.svg'
import cn from 'classnames/bind'
import {NavLink} from 'react-router-dom'
import {Icon} from '../../ui/Icon/Icon'

const cx = cn.bind(cl)

interface Props {
    title: string,
    subTitle: string,
    img: string
    typeImg: 'leftImg' | 'rightImg'
    linkTo: string
}

export const Item = ({title, subTitle, img, typeImg, linkTo}: Props) => {




	return (
		<div className={cl.item1}>
			<div className={cl.leftPartItem}>
				<div className={cl.itemText}>
					<div className={cl.itemTitle}>
						{title}
					</div>
					<div className={cl.itemSubTitle}>
						{subTitle}
					</div>
				</div>
				<NavLink to={linkTo}>
					<button className={cl.itemButton}>
						<Icon icon={'arrow'}/>
					</button>
				</NavLink>

			</div>
			<img
				src={img}
				alt=""
				className={cx({
					leftImg: typeImg === 'leftImg',
					rightImg: typeImg === 'rightImg',
				})}
			/>
		</div>
	)
}

