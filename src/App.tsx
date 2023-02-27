import React, {useState} from 'react';
import {Header} from "./components/HeaderComponent/Header";
import {Main} from "./components/MainComponent/Main"
import {Footer} from "./components/FooterComponent/Footer";



function App() {
  return (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
