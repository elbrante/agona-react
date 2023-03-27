import React from 'react';
import {Form, Formik} from "formik";
import Modal from 'react-modal'
import cl from './LoginSms.module.sass'
import X from "../../../asserts/closeX.svg";
import {Input} from "../InputFields/Input";
import {LinkAuth} from "../LinkAuth/LinkAuth";
import {ButtonAuth} from "../ButtonAuth/ButtonAuth";

interface Props {
    modalAuth: boolean
    closeModal: () => void
}


const LoginSms = ({modalAuth, closeModal}: Props) => {
    return (
        <Modal isOpen={modalAuth}
               className={cl.wrapperAuth}
               overlayClassName={cl.overlay}
               onRequestClose={closeModal}
        >
            <Formik
                initialValues={{
                phone: '',
                }}
                onSubmit={() => {}}>
                <Form className={cl.auth}>
                    <div className={cl.authHeader}>
                        <span>Вход или регистрация</span>
                        <img src={X} alt="Закрыть модальное окно" onClick={closeModal}/>
                    </div>
                    <div className={cl.authMain}>
                        <Input placeholder={'Телефон'}/>
                        <div className={cl.twoLinks}>
                            <ButtonAuth theme={'GREEN'}>Получить код</ButtonAuth>
                            <LinkAuth>{'Я уже зарегистировался(-ась)'}</LinkAuth>
                        </div>
                        <ButtonAuth theme={'GRAY'}>Вход для партнёров</ButtonAuth>
                    </div>
                </Form>
            </Formik>
        </Modal>
    );
};

export default LoginSms;