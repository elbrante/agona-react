import {configureStore} from '@reduxjs/toolkit'
import {showModalLogin} from './Login'
import {showGetCode} from './GetCode'
import {showEnterCode} from './EnterCode'
import {AuthApi} from '../services/auth'
import {showRegistration} from './Registration'
import {showDataAccount} from './DataAccount'


export const storeAgona = configureStore({
	devTools: true,
	reducer: {
		[showModalLogin.name]: showModalLogin.reducer,
		[showGetCode.name]: showGetCode.reducer,
		[showEnterCode.name]: showEnterCode.reducer,
		[showRegistration.name]: showRegistration.reducer,
		[showDataAccount.name]: showDataAccount.reducer,
		[AuthApi.reducerPath]: AuthApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([AuthApi.middleware]),
})

export type RootState = ReturnType<typeof storeAgona.getState>
export type AppDispatch = typeof storeAgona.dispatch