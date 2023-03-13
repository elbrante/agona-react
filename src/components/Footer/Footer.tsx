import React from 'react';
import cl from './Footer.module.sass'
import mail from '../../asserts/mail.svg'
import phone from '../../asserts/phone.svg'

export const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.footerInfo}>
                <div className={cl.mail}>
                    <img src={mail} alt=""/>
                    <span className={cl.mailName}>info@ecorus.ru</span>
                </div>
                <div className={cl.phoneNumber}>
                    <img src={phone} alt=""/>
                    <span className={cl.phone}>+7 (800) 880-88-88</span>
                </div>
            </div>
        </div>
    );
};

