import React from 'react';
import cl from './Button.module.sass'

interface MainButton {
    nameFilter: string
}

export const Button = ({nameFilter}: MainButton) => {
    return (
        <button className={cl.buttonFilter}>
            {nameFilter}
        </button>
    );
};

