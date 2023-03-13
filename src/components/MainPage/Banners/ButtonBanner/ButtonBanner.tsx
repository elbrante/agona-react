import React, {ReactNode} from 'react';
import button from "../../../../asserts/button.svg";
import cl from "../ButtonBanner/ButtonBanner.module.sass";

import cn from 'classnames/bind'
const cx = cn.bind(cl)


interface Props {
    children: ReactNode;
    type?: 'BANNER3'
}

export const ButtonBanner = ({children, type}: Props) => {
    return (
        <button className={cx(cl.conditionButton, {
            buttonBanner3: type === 'BANNER3'
        })}>
            {children}
        </button>
    );
};

