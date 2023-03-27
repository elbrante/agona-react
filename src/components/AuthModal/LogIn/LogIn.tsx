import cl from './/Login.module.sass'
import X from '../../../asserts/closeX.svg'
import Modal from 'react-modal'
import {Input} from "../InputFields/Input";
import {ButtonAuth} from "../ButtonAuth/ButtonAuth";
import {LinkAuth} from "../LinkAuth/LinkAuth";
import {Form, Formik} from "formik";
import {useState} from "react";
import LoginSms from "../LoginWithSms/LoginSms";


interface Props {
    modalAuth: boolean
    closeModal: () => void
}

export const LogIn = ({modalAuth, closeModal}: Props) => {

    const [loginSms, setLoginSms] = useState(false)

    return (
        <Modal
            isOpen={modalAuth}
            className={cl.wrapperAuth}
            overlayClassName={cl.overlay}
            onRequestClose={closeModal}
        >
            <Formik
                initialValues={{
                    phone: '',
                    password: '',
                }}
                onSubmit={() => {}}>
                <Form className={cl.auth}>
                    <div className={cl.authHeader}>
                        <span>Вход</span>
                        <img src={X} alt="Закрыть модальное окно" onClick={closeModal}/>
                    </div>
                    <div className={cl.authMain}>
                        <div className={cl.fields}>
                            <Input placeholder={'Телефон'}/>
                            <Input placeholder={'Пароль'}/>
                        </div>
                        <div className={cl.login}>
                            <ButtonAuth theme={"GREEN"}>Войти</ButtonAuth>
                            <div className={cl.loginWithSmsOrRegistration}>
                                <LinkAuth onClick={() => setLoginSms(true)}>{'Войти с помощью смс'}</LinkAuth>
                                <LinkAuth>{'Регистрация'}</LinkAuth>
                            </div>
                        </div>
                        <ButtonAuth theme={"GRAY"}>Вход для партнёров</ButtonAuth>
                    </div>
                </Form>
            </Formik>
            <LoginSms modalAuth={loginSms} closeModal={() => setLoginSms(false)}/>
        </Modal>
    );
};

