import React from 'react';
import {LoginSmsCode} from "./AuthModal/LoginSmsCode/LoginSmsCode";

export const AboutService = () => {
    return (
        <div>
            <h1 style={{
                display: "flex",
                justifyContent: "center"}}>
                О сервисе
            </h1>
            <LoginSmsCode/>
        </div>
    );
};

