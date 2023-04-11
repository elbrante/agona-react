import React from 'react';
import cl from './Icon.module.sass'

interface Props {
    icon: string
    size?: number | string
    width?: number | string
    height?: number | string
    onClick?: () => void;
}



export const Icon = ({icon, height, width, size = 24, onClick}: Props) => {
    const iconWidth = width ?? size
    const iconHeight = height ?? size

    return (
        <svg
            className={cl.icon}
            style={{
                width: iconWidth + 'px',
                height: iconHeight + 'px'
            }}
            onClick={onClick}
        >
            <use xlinkHref={`/sprite.svg#${icon}`}></use>
        </svg>
    );
};

