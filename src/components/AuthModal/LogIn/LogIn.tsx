import cl from './/Login.module.sass'
import X from '../../../asserts/closeX.svg'
import Modal from 'react-modal'
import {Input} from "../InputFields/Input";
import {ButtonAuth} from "../ButtonAuth/ButtonAuth";
import {LinkAuth} from "../LinkAuth/LinkAuth";
import {Form, Formik} from "formik";
import GetCode from "../GetCode/GetCode";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {turnOffLoginSms, turnOnLoginSms} from "../../../store/GetCode";
import {Icon} from "../../ui/Icon/Icon";
import {turnOffRegistration, turnOnRegistration} from "../../../store/Registration";
import {Registration} from "../Registration/Registration";


interface Props {
    modalAuth: boolean
    closeModal: () => void
}

export const LogIn = ({modalAuth, closeModal}: Props) => {

    const stateLoginSms = useSelector((state: RootState) => state.showGetCode.isOpenModal)
    const dispatch = useDispatch()

    const stateRegistration = useSelector((state: RootState) => state.showRegistration.isOpenModal)


    function openModalLoginSms() {
        closeModal()
        dispatch(turnOnLoginSms())
    }

    function openModalRegistration() {
        closeModal()
        dispatch(turnOnRegistration())
    }

    return (
        <>
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
                    onSubmit={() => {
                    }}>
                    <Form className={cl.auth}>
                        <div className={cl.authHeader}>
                            <span>Вход</span>
                            {/*<Icon icon={'closeX'} width={32} height={32} onClick={closeModal}/>*/}
                            {/*SVG не видно*/}
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
                                    <LinkAuth onClick={() => openModalLoginSms()}>{'Войти с помощью смс'}</LinkAuth>
                                    <LinkAuth onClick={() => openModalRegistration()}>{'Регистрация'}</LinkAuth>
                                </div>
                            </div>
                            <ButtonAuth theme={"GRAY"}>Вход для партнёров</ButtonAuth>
                        </div>
                    </Form>
                </Formik>
            </Modal>

            <GetCode modalAuth={stateLoginSms} closeModal={() => dispatch(turnOffLoginSms())}/>
            <Registration modalAuth={stateRegistration} closeModal={() => dispatch(turnOffRegistration())}/>
        </>
    );
};

