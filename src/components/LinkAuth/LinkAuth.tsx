import React, {ReactNode} from 'react'
import cl from './LinkAuth.module.sass'

interface Props {
    children: ReactNode;
    onClick?: () => void;
}


export const LinkAuth = ({children, onClick}: Props) => {
	return (
		<a className={cl.link} onClick={onClick}>
			{children}
		</a>
	)
}
