import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface DataAccount {
    balance: number | undefined
    email: string | undefined
}

const initialState: DataAccount = {
	balance: 0,
	email: ''
}

export const showDataAccount = createSlice({
	name: 'showDataAccount',
	initialState,
	reducers: {
		setBalance: (state, action: PayloadAction<number | undefined>) => {
			state.balance = action.payload
		},
		setEmail: (state, action: PayloadAction<string | undefined>) => {
			state.email = action.payload
		}
	}
})

export const {setBalance, setEmail} = showDataAccount.actions