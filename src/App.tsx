import React from 'react'
import {EcoMarket} from './pages/EcoMarket/EcoMarket'
import {Route, Routes} from 'react-router-dom'
import {AboutService} from './pages/AboutService'
import {CollectionPoints} from './pages/CollectionPoints'
import {MainPage} from './pages/MainPage/MainPage'
import {Layout} from './components/Layout'
import {PersonalAccount} from './pages/PersonalAccount/PersonalAccount'


const App = () => {
	return (
		<Routes>
			<Route element={<Layout/>}>
				<Route path={'/ecomarket'} element={<EcoMarket/>}/>
				<Route path={'/about'} element={<AboutService/>}/>
				<Route path={'/colpoints'} element={<CollectionPoints/>}/>
				<Route path={'/'} element={<MainPage/>}/>
				<Route path={'/account'} element={<PersonalAccount/>}/>
			</Route>
		</Routes>
	)
}

export default App
