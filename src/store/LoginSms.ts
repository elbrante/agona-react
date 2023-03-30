import {createSlice} from "@reduxjs/toolkit";

export type LoginSms = {
    isOpenModal: boolean
}

const initialState: LoginSms = {
    isOpenModal: false
}

export const showModalLoginSms = createSlice({
    name: 'showModalLoginSms',
    initialState,
    reducers: {
        turnOnLoginSms: (state) => {
            state.isOpenModal = true
        },
        turnOffLoginSms: (state) => {
            state.isOpenModal = false
        }
    }
})

export const {turnOnLoginSms, turnOffLoginSms} = showModalLoginSms.actions