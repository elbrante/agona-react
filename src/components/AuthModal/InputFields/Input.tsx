import React from 'react';
import cl from "../InputFields/Input.module.sass";

interface InputProps {
    placeholder: string
    name?: string
    type?: string
    onChange?: any //не знаю, какой тип сюда поставить
    onBlur?: any //не знаю, какой тип сюда поставить
    value?: string | number
    onClick?: () => void

}


export const Input = ({placeholder, name, type, onChange, onBlur, value, onClick}: InputProps) => {
    return (
        <input
            name={name}
            type={type}
            className={cl.input}
            placeholder={placeholder}

            onChange={onChange}
            onBlur={onBlur}
            value={value}
            onClick={onClick}
        />
    );
};

