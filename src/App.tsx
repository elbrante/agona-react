import React from 'react'
import {EcoMarket} from './components/EcoMarket'
import {Route, Routes} from 'react-router-dom'
import {AboutService} from './components/AboutService'
import {CollectionPoints} from './components/CollectionPoints'
import {MainPage} from './components/MainPage'
import {Layout} from './components/Layout'
import {PersonalAccount} from './components/PersonalAccount'



const App = () =>  {
	return (
		<Routes>
			<Route path={'/'} element={<Layout/>}>
				<Route path={'/ecomarket'} element={<EcoMarket/>}/>
				<Route path={'/about'} element={<AboutService/>}/>
				<Route path={'/colpoints'} element={<CollectionPoints/>}/>
				<Route path={'/main'} element={<MainPage/>}/>
				<Route path={'/account'} element={<PersonalAccount/>}/>
			</Route>
		</Routes>
	)
}

export default App
