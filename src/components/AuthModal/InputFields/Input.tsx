import React from 'react';
import cl from "../InputFields/Input.module.sass";

interface InputProps {
    placeholder: string
}


export const Input = ({placeholder}: InputProps) => {
    return (
        <input className={cl.input} placeholder={placeholder}/>
    );
};

