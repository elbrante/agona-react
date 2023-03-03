import React, {ReactNode} from 'react';
import cl from './ButtonAuth.module.sass'
import cn from 'classnames/bind'

const cx = cn.bind(cl)


type ButtonProps = {
    theme?: "GREEN" | "GRAY";
    children: ReactNode;
}


export const ButtonAuth = ({theme, children}: ButtonProps) => {
    return (
        <button className={cx(cl.button, {
            buttonGreen: theme === 'GREEN',
            buttonGray: theme === 'GRAY'
        })}
        >
            {children}
        </button>
    );
};





















