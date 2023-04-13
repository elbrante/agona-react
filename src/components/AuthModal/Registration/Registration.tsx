import React, {useEffect} from 'react';
import Modal from "react-modal";
import cl from "./Registration.module.sass";
import {Form, Formik} from "formik";
import {Icon} from "../../ui/Icon/Icon";
import X from "../../../asserts/closeX.svg";
import {Input} from "../InputFields/Input";
import {ButtonAuth} from "../ButtonAuth/ButtonAuth";
import {useRegistrationMutation} from "../../../services/auth";
import {RegisterBody, RegisterResponse} from "../../../models/profile";
import {useDispatch} from "react-redux";
import {turnOnLogin} from "../../../store/Login";

interface Props {
    modalAuth: boolean
    closeModal: () => void
}


export const Registration = ({modalAuth, closeModal}: Props) => {
    const [register, result] = useRegistrationMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(result)
    }, [result])


    const initialValues: RegisterBody = {
        email: '',
        phone: '',
        password: '',
        balance: '',
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
                    <RegisterBody>
                    initialValues={initialValues}
                    onSubmit={(values, helper) => {
                        register(values)
                        helper.resetForm()
                        closeModal()
                        dispatch(turnOnLogin())
                    }}>
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                      }) => (
                        <Form onSubmit={handleSubmit} className={cl.auth}>
                            <div className={cl.authHeader}>
                                <span>Регистрация</span>
                                <img src={X} alt="Закрыть модальное окно" onClick={closeModal}/>
                            </div>
                            <div className={cl.authMain}>
                                <div className={cl.fields}>
                                    <Input
                                        name={'email'}
                                        placeholder={'Почта'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <Input
                                        name={'phone'}
                                        placeholder={'Номер телефона'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                    />
                                    <Input
                                        name={'password'}
                                        type={'password'}
                                        placeholder={'Пароль'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <Input
                                        name={'balance'}
                                        placeholder={'Баланс'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.balance}

                                    />
                                </div>
                                <div className={cl.login}>
                                    <ButtonAuth
                                        disabled={result.isLoading}
                                        type={'submit'}
                                        theme={"GREEN"}
                                    >
                                        Зарегистрироваться
                                    </ButtonAuth>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

