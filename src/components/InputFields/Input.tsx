import React, {InputHTMLAttributes} from 'react'
import cl from './Input.module.sass'


export const Input = ({
	placeholder,
	name,
	type,
	onChange,
	onBlur,
	value,
	onClick
}: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			name={name}
			type={type}
			className={cl.input}
			placeholder={placeholder}

			onChange={onChange}
			onBlur={onBlur}
			value={value}
			onClick={onClick}
		/>
	)
}

