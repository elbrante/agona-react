import cl from './/Login.module.sass'
import X from '../../../asserts/closeX.svg'
import Modal from 'react-modal'
import {Input} from '../InputFields/Input'
import {ButtonAuth} from '../ButtonAuth/ButtonAuth'
import {LinkAuth} from '../LinkAuth/LinkAuth'
import {Form, Formik} from 'formik'
import GetCode from '../GetCode/GetCode'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from 'src/store/store'
import {turnOffLoginSms, turnOnLoginSms} from 'src/store/GetCode'
import {turnOffRegistration, turnOnRegistration} from 'src/store/Registration'
import {Registration} from '../Registration/Registration'
import {useAuthorizationMutation, useLazyGetProfileQuery} from 'src/services/auth'
import {AuthenticationRequest} from 'src/models/generated'
import {setBalance, setEmail} from 'src/store/DataAccount'
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


	useEffect(() => {
		if (data.isSuccess) {
			localStorage.setItem('token', data?.data?.token as string)
			getProfile(null)
				.then(prom => prom.data)
				.then(body => setData(body?.balance, body?.email))
		}
	}, [data.isSuccess])


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
		console.log('работает')
	}


	const initialValues: AuthenticationRequest = {
		login: '',
		password: '',
	}

	function condCloseModal(prom: any) {
		console.log(prom)
		console.log(prom.error.status)
		if (prom.error.status !== 500) {
			closeModal()
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
					onSubmit={(values, helpers) => {
						if (values.login !== '' && values.password !== '') {
							login(values)
								.then(prom => condCloseModal(prom)) //не могу разобраться
							helpers.resetForm()
							// if (data.isSuccess) {
							// 	closeModal()
							// }
						}
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

