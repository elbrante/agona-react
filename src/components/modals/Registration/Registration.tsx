import React from 'react'
import Modal from 'react-modal'
import cl from './Registration.module.sass'
import {Form, Formik, FormikHelpers} from 'formik'
import X from '../../../assets/closeX.svg'
import {Input} from '../../InputFields/Input'
import {ButtonAuth, Theme} from '../../ButtonAuth/ButtonAuth'
import {useRegistrationMutation} from '../../../services/auth'
import {RegisterBody} from '../../../models/profile'
import {useDispatch} from 'react-redux'
import * as yup from 'yup'
import {turnOnLogin} from '../../../store/Login'


interface Props {
    modalAuth: boolean
    closeModal: () => void
}


export const Registration = ({modalAuth, closeModal}: Props) => {
	const [register, result] = useRegistrationMutation()
	const dispatch = useDispatch()

	const initialValues: RegisterBody = {
		email: '',
		phone_number: '',
		password: '',
		balance: '',
	}

	function onSubmitFormik(values: RegisterBody, helper: FormikHelpers<RegisterBody>) {
		register(values)
		helper.resetForm()
		closeModal() //dispatch не закрывает модалку
		// а после закрытия модалки должна сразу откраывать модалка авторизации
		dispatch(turnOnLogin())
	}

	const validationRegister = yup.object({
		email: yup.string().email('Неправильный формат почты').required(),
		phone_number: yup.string().required(),
		password: yup.string().required(),
		balance: yup.string().required()
	})


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
					validationSchema={validationRegister}
					initialValues={initialValues}
					onSubmit={(values, helper) => onSubmitFormik(values, helper)}>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						errors
					}) => (
						<Form onSubmit={handleSubmit} className={cl.auth}>
							<div className={cl.authHeader}>
								<span>Регистрация</span>
								<button>
									<img src={X} alt="Закрыть модальное окно" onClick={closeModal}/>
								</button>
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

									{errors.email && (
										<div className={cl.error}>
											{errors.email}
										</div>
									)}

									<Input
										name={'phone_number'}
										placeholder={'Номер телефона'}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.phone_number}
									/>

									{errors.phone_number && (
										<div className={cl.error}>
											{errors.phone_number}
										</div>
									)}
									<Input
										name={'password'}
										type={'password'}
										placeholder={'Пароль'}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>

									{errors.password && (
										<div className={cl.error}>
											{errors.password}
										</div>
									)}

									<Input
										name={'balance'}
										placeholder={'Баланс'}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.balance}

									/>

									{errors.balance && (
										<div className={cl.error}>
											{errors.balance}
										</div>
									)}

									<div className={cl.login}>
										<ButtonAuth
											disabled={result.isLoading}
											type={'submit'}
											theme={Theme.GREEN}
										>
                                            Зарегистрироваться
										</ButtonAuth>
									</div>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</Modal>
		</>
	)
}

