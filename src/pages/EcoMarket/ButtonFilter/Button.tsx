import React, {ReactNode} from 'react'
import cl from './Button.module.sass'

interface Props {
    children: ReactNode
}

export const Button = ({children}: Props) => {
	return (
		<button className={cl.buttonFilter}>
			{children}
		</button>
	)
}

