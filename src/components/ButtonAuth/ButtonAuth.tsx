import React, {ButtonHTMLAttributes, ReactNode} from 'react'
import cl from './ButtonAuth.module.sass'
import cn from 'classnames/bind'

const cx = cn.bind(cl)


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'GREEN' | 'GRAY'
    children: ReactNode
}


export const ButtonAuth = ({theme, children, onClick, type, disabled}: ButtonProps) => {
	return (
		<button disabled={disabled} type={type} onClick={onClick} className={cx(cl.button, {
			buttonGreen: theme === 'GREEN',
			buttonGray: theme === 'GRAY'
		})}
		>
			{children}
		</button>
	)
}





















