import React, {ReactNode} from 'react'
import cn from 'classnames/bind'
import cl from './LinkActive.module.sass'


const cx = cn.bind(cl)

interface Props {
    state: boolean;
    children: ReactNode;
    onClick: () => void;

}


export const LinkActive = ({state, children, onClick}: Props) => {
	return (
		<a onClick={onClick} className={cx(cl.link, {
			linkActive: state
		})}>
			{children}
		</a>
	)
}

