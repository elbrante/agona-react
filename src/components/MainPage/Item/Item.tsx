import React from 'react';
import cl from "../Item/Item.module.sass";
import button from "../../../asserts/button.svg";
import cn from 'classnames/bind'

const cx = cn.bind(cl)

interface Props {
    title: string,
    subTitle: string,
    img: string
    type: 'leftImg' | 'rightImg'
}

export const Item = ({title, subTitle, img, type}: Props) => {
    return (
        <div className={cl.item1}>
            <div className={cl.leftPartItem}>
                <div className={cl.itemText}>
                    <div className={cl.itemTitle}>
                        {title}
                    </div>
                    <div className={cl.itemSubTitle}>
                        {subTitle}
                    </div>
                </div>
                <button className={cl.itemButton}>
                    <img src={button} alt=""/>
                </button>
            </div>
            <img
                src={img}
                alt=""
                className={cx({
                    leftImg: type === 'leftImg',
                    rightImg: type === 'rightImg',
                })}
            />
        </div>
    );
};

