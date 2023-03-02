import cl from './/Auth.module.sass'
import X from '../../asserts/крестик.svg'
import Modal from 'react-modal'
import {Input} from "./InputFields/Input";
import {ButtonAuth} from "./ButtonAuth/ButtonAuth";
import {LinkAuth} from "./LinkAuth/LinkAuth";



interface AuthProps {
    modalAuth: boolean
    closeModal: () => void
}

export const Auth = ({modalAuth, closeModal}: AuthProps) => {


    return (
        <Modal
            isOpen={modalAuth}
            className={cl.wrapperAuth}
            overlayClassName={cl.overlay}
            onRequestClose={closeModal}
        >
            <form className={cl.auth}>
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
                            <LinkAuth>{'Войти с помощью смс'}</LinkAuth>
                            <LinkAuth>{'Регистрация'}</LinkAuth>
                        </div>
                    </div>
                    <ButtonAuth theme={"GRAY"}> Вход для партнёров</ButtonAuth>
                </div>
            </form>
        </Modal>
    );
};

