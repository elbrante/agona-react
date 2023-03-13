import React, {ReactNode} from 'react';
import cl from './Button.module.sass'

interface MainButton {
    children: ReactNode
}

export const Button = ({children}: MainButton) => {
    return (
        <button className={cl.buttonFilter}>
            {children}
        </button>
    );
};

