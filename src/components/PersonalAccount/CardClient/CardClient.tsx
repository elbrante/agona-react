import React from 'react'
import cl from './CardClient.module.sass'
import avatarClient from 'src/asserts/avatarClient.svg'

export const CardClient = () => {
	return (
		<div className={cl.cardClient}>
			<img src={avatarClient} alt=""/>
			<div className={cl.infoClient}>
				<span className={cl.nameClient}>Алексей Петрович</span>
				<div className={cl.contactsClient}>
					<span className={cl.numberClient}>+7 (917) 888 88 88</span>
					<span className={cl.mailClient}>ivanov@gmail.com</span>
				</div>
			</div>
			<button className={cl.buttonClient}>Редактировать</button>
		</div>
	)
}

