import React, {ButtonHTMLAttributes, ReactNode} from 'react'
import cl from './ButtonAuth.module.sass'
import cn from 'classnames/bind'

const cx = cn.bind(cl)

export enum Theme {
    GREEN,
    GRAY
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: Theme
    children: ReactNode
}


export const ButtonAuth = ({theme, children, onClick, type, disabled}: Props) => {
	return (
		<button disabled={disabled} type={type} onClick={onClick} className={cx(cl.button, {
			buttonGreen: theme === Theme.GREEN,
			buttonGray: theme === Theme.GRAY
		})}
		>
			{children}
		</button>
	)
}





















