import React, {ReactNode} from 'react'
import cl from './ButtonAuth.module.sass'
import cn from 'classnames/bind'

const cx = cn.bind(cl)


type ButtonProps = {
    theme?: 'GREEN' | 'GRAY'
    children: ReactNode
    onClick?: () => void
    type?: 'submit' | 'reset' | 'button'

    disabled?: boolean
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





















