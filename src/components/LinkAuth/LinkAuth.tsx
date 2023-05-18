import React, {ReactNode} from 'react'
import cl from './LinkAuth.module.sass'

interface LinkAuthProps {
    children: ReactNode;
    onClick?: () => void;
}


export const LinkAuth = ({children, onClick}: LinkAuthProps) => {
	return (
		<a className={cl.link} onClick={onClick}>
			{children}
		</a>
	)
}
