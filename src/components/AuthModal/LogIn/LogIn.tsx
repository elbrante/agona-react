import cl from './/Login.module.sass'
import X from '../../../asserts/closeX.svg'
import Modal from 'react-modal'
import {Input} from '../InputFields/Input'
import {ButtonAuth} from '../ButtonAuth/ButtonAuth'
import {LinkAuth} from '../LinkAuth/LinkAuth'
import {Form, Formik} from 'formik'
import GetCode from '../GetCode/GetCode'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../store/store'
import {turnOffLoginSms, turnOnLoginSms} from '../../../store/GetCode'
import {Icon} from '../../ui/Icon/Icon'
import {turnOffRegistration, turnOnRegistration} from '../../../store/Registration'
import {Registration} from '../Registration/Registration'
import {useAuthorizationMutation} from '../../../services/auth'
import {useEffect} from 'react'
import {AuthenticationRequest} from '../../../models/generated'
import {turnOffLogin} from '../../../store/Login'


interface Props {
    modalAuth: boolean
    closeModal: () => void
}

export const LogIn = ({modalAuth, closeModal}: Props) => {

	const [login, data] = useAuthorizationMutation()


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


	const initialValues: AuthenticationRequest = {
		login: '',
		password: '',
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
                    <AuthenticationRequest>
					initialValues={initialValues}
					onSubmit={(values, helpers) => {
						if (values.login !== '' && values.password !== '') {
							login(values)
							console.log(data)
							helpers.resetForm()

							// const token = data?.data?.token
							// localStorage.setItem('token', token as string)
						}
						// if (data.isSuccess) {
						// 	const token = data?.data?.token
						// 	localStorage.setItem('token', token as string)
						// }
					}}>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
					}) => (
						<Form onSubmit={handleSubmit} className={cl.auth}>
							<div className={cl.authHeader}>
								<span>Вход</span>
								{/*<Icon icon={'closeX'} width={32} height={32} onClick={closeModal}/>*/}
								{/*SVG не видно*/}
								<img src={X} alt="Закрыть модальное окно" onClick={closeModal}/>
							</div>
							<div className={cl.authMain}>
								<div className={cl.fields}>
									<Input
										placeholder={'Номер телефона'}
										name={'login'}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.login}
									/>

									<Input
										placeholder={'Пароль'}
										name={'password'}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>
									{/*{data.isError ?*/}
									{/*    <span className={cl.errorMessage}>Неверное имя пользователя или пароль</span>*/}
									{/*    :*/}
									{/*    localStorage.setItem('token', data?.data?.token as string)*/}
									{/*}*/}

									{data.isError &&
                                        <span className={cl.errorMessage}>Неверное имя пользователя или пароль</span>}

								</div>
								<div className={cl.login}>
									<ButtonAuth type={'submit'}
										theme={'GREEN'}
									>
                                        Войти
									</ButtonAuth>
									<div className={cl.loginWithSmsOrRegistration}>
										<LinkAuth onClick={() => openModalLoginSms()}>{'Войти с помощью смс'}</LinkAuth>
										<LinkAuth onClick={() => openModalRegistration()}>{'Регистрация'}</LinkAuth>
									</div>
								</div>
								<ButtonAuth theme={'GRAY'}>Вход для партнёров</ButtonAuth>
							</div>
						</Form>
					)}
				</Formik>
			</Modal>
			{data.isSuccess && localStorage.setItem('token', data?.data?.token as string)}
			{/*{data.isSuccess && closeModal()}*/}
			{/*Работает, но появляется белый экран*/}


			<GetCode modalAuth={stateLoginSms} closeModal={() => dispatch(turnOffLoginSms())}/>
			<Registration modalAuth={stateRegistration} closeModal={() => dispatch(turnOffRegistration())}/>
		</>
	)
}

