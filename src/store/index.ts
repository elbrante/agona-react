import {configureStore} from "@reduxjs/toolkit"
import {showModalLogin} from "./Login";
import {showModalLoginSms} from "./LoginSms";
import {showEnterCode} from "./EnterCode";

export const storeAgona = configureStore({
    reducer: {
        [showModalLogin.name]: showModalLogin.reducer,
        [showModalLoginSms.name]: showModalLoginSms.reducer,
        [showEnterCode.name]: showEnterCode.reducer,
    }
})

export type RootState = ReturnType<typeof storeAgona.getState>
export type AppDispatch = typeof storeAgona.dispatch