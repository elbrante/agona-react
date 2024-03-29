import React from 'react'
import {Header} from '../Header/Header'
import {Outlet} from 'react-router-dom'
import {Footer} from '../Footer/Footer'

export const Layout = () => {
	return (
		<div>
			<Header/>
			<main>
				<Outlet/>
			</main>
			<Footer/>
		</div>
	)
}

