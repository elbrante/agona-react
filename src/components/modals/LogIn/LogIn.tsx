import cl from './/Login.module.sass'
import X from '../../../asserts/closeX.svg'
import Modal from 'react-modal'
import {Input} from '../../InputFields/Input'
import {ButtonAuth} from '../../ButtonAuth/ButtonAuth'
import {LinkAuth} from '../../LinkAuth/LinkAuth'
import {Form, Formik, FormikHelpers} from 'formik'
import GetCode from '../GetCode/GetCode'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../store/store'
import {turnOffLoginSms, turnOnLoginSms} from '../../../store/GetCode'
import {turnOffRegistration, turnOnRegistration} from '../../../store/Registration'
import {Registration} from '../Registration/Registration'
import {useAuthorizationMutation, useLazyGetProfileQuery} from '../../../services/auth'
import {AuthenticationRequest} from '../../../models/generated'
import {setBalance, setEmail} from '../../../store/DataAccount'
import {useEffect} from 'react'


interface Props {
    modalAuth: boolean
    closeModal: () => void
}

export const LogIn = ({modalAuth, closeModal}: Props) => {
	const [login, data] = useAuthorizationMutation()
	const [getProfile] = useLazyGetProfileQuery()

	const stateLoginSms = useSelector((state: RootState) => state.showGetCode.isOpenModal)
	const stateRegistration = useSelector((state: RootState) => state.showRegistration.isOpenModal)
	const dispatch = useDispatch()

	function openModalLoginSms() {
		closeModal()
		dispatch(turnOnLoginSms())
	}

	function openModalRegistration() {
		closeModal()
		dispatch(turnOnRegistration())
	}

	//Оставил на всякий случай
	// useEffect(() => {
	// 	if (data.isSuccess) {
	// 		localStorage.setItem('token', data?.data?.token as string)
	// 		getProfile(null)
	// 			.then(prom => prom.data)
	// 			.then(body => setData(body?.balance, body?.email))
	// 	}
	// }, [data.isSuccess])


	useEffect(() => {
		if (localStorage.getItem('token')) {
			getProfile(null)
				.then(prom => prom.data)
				.then(body => setData(body?.balance, body?.email))
		}
	}, [])


	function setData(balanceFetch: number | undefined, emailFetch: string | undefined) {
		dispatch(setBalance(balanceFetch))
		dispatch(setEmail(emailFetch))
	}


	const initialValues: AuthenticationRequest = {
		login: '',
		password: '',
	}


	function onSubmitFormik(values: AuthenticationRequest, helpers: FormikHelpers<AuthenticationRequest>) {
		if (values.login !== '' && values.password !== '') {
			login(values)
				.then(res => {
					if ('data' in res) {
						localStorage.setItem('token', res.data.token as string)
						helpers.resetForm()
						closeModal()
					}
				})
				.then(() => {
					getProfile(null)
						.then(prom => setData(prom?.data?.balance, prom?.data?.email))
				})
		}
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
					onSubmit={(values, helpers) => onSubmitFormik(values, helpers)}>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
					}) => (
						<Form onSubmit={handleSubmit} className={cl.auth}>
							<div className={cl.authHeader}>
								<span>Вход</span>
								<button>
									<img src={X} alt="Закрыть модальное окно" onClick={closeModal}/>
								</button>
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
									{data.isError &&
                                        <span className={cl.errorMessage}>Неверное имя пользователя или пароль</span>}
								</div>
								<div className={cl.login}>
									<ButtonAuth
										type={'submit'}
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

			<GetCode modalAuth={stateLoginSms} closeModal={() => dispatch(turnOffLoginSms())}/>
			<Registration modalAuth={stateRegistration} closeModal={() => dispatch(turnOffRegistration())}/>
		</>
	)
}

