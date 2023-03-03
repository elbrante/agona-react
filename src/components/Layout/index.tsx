import React from 'react';
import {Header} from "../HeaderComponent/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../FooterComponent/Footer";

export const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

