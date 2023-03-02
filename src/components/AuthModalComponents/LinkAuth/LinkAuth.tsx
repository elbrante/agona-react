import React, {ReactNode} from 'react';
import cl from './LinkAuth.module.sass'

interface LinkAuthProps {
    children: ReactNode
}


export const LinkAuth = ({children}: LinkAuthProps) => {
    return (
        <a className={cl.link} >
            {children}
        </a>
    );
};
