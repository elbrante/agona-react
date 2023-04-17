import React, {useState} from 'react'
import cl from './/Header.module.sass'
import EcoRUS from '../../asserts/EcoRUS.png'
import location from '../../asserts/location.svg'
import currency from '../../asserts/currency.svg'
import avatar from '../../asserts/avatar.svg'
import {LogIn} from '../AuthModal/LogIn/LogIn'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../store/store'
import {turnOffLogin, turnOnLogin} from '../../store/Login'
import {Icon} from '../ui/Icon/Icon'
import {useGetProfileQuery} from '../../services/auth'


export const Header = () => {


	const data = useGetProfileQuery(null)

	const stateLogin = useSelector((state: RootState) => state.showModalLogin.isOpenModal)
	const dispatch = useDispatch()

	return (
		<header className={cl.header}>
			<div className={cl.headerLeft}>
				<img className={cl.headerEcoRus} src={EcoRUS} alt=""/>
				<nav className={cl.headerLeftNav}>
					<NavLink
						to={'/main'}
						className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                        Главная
					</NavLink>

					<NavLink
						to={'/colpoints'}
						className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                        Пункты сбора
					</NavLink>

					<NavLink
						to={'/ecomarket'}
						className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                        ЭкоМаркет
					</NavLink>

					<NavLink
						to={'/about'}
						className={({isActive}) => cn(cl.headerLeftLink, isActive && cl.headerLeftActiveLink)}>
                        О сервисе
					</NavLink>
				</nav>
			</div>
			<nav className={cl.headerRight}>
				<div className={cl.headerRightNav}>
					<a className={cl.headerRightLink}>
						<Icon icon={'pin'}/>
                        Казань
					</a>
				</div>
				<nav className={cl.headerRightNav} onClick={() => dispatch(turnOnLogin())}>
					<a className={cl.headerRightLinkBold}>
						<img src={currency} alt=""/>
						{data?.data?.balance}
					</a>
					<a className={cl.headerRightLink}>
						<img src={avatar} alt=""/>
						{data?.data?.email}
					</a>
				</nav>
				<LogIn modalAuth={stateLogin} closeModal={() => dispatch(turnOffLogin())}/>
			</nav>
		</header>
	)
}
