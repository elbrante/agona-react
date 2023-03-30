import {createSlice} from "@reduxjs/toolkit";

export type EnterCode = {
    isOpenModal: boolean
}

const initialState: EnterCode = {
    isOpenModal: false
}

export const showEnterCode = createSlice({
    name: 'showEnterCode',
    initialState,
    reducers: {
        turnOnEnterCode: (state) => {
            state.isOpenModal = true
        },
        turnOffEnterCode: (state) => {
            state.isOpenModal = false
        }
    }
})

export const {turnOnEnterCode, turnOffEnterCode} = showEnterCode.actions