import {createSlice} from "@reduxjs/toolkit";

export type GetCode = {
    isOpenModal: boolean
}

const initialState: GetCode = {
    isOpenModal: false
}

export const showGetCode = createSlice({
    name: 'showGetCode',
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

export const {turnOnLoginSms, turnOffLoginSms} = showGetCode.actions