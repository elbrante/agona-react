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
import {turnOffRegistration, turnOnRegistration} from '../../../store/Registration'
import {Registration} from '../Registration/Registration'
import {useAuthorizationMutation} from '../../../services/auth'
import {AuthenticationRequest} from '../../../models/generated'
import {setBalance, setEmail} from '../../../store/DataAccount'
import {useEffect} from 'react'


interface Props {
    modalAuth: boolean
    closeModal: () => void
}

export const LogIn = ({modalAuth, closeModal}: Props) => {
	const [login, data] = useAuthorizationMutation()
	const stateLoginSms = useSelector((state: RootState) => state.showGetCode.isOpenModal)
	const stateRegistration = useSelector((state: RootState) => state.showRegistration.isOpenModal)
	const balance = useSelector((state: RootState) => state.showDataAccount.balance)
	const email = useSelector((state: RootState) => state.showDataAccount.email)
	const dispatch = useDispatch()

	function openModalLoginSms() {
		closeModal()
		dispatch(turnOnLoginSms())
	}

	function openModalRegistration() {
		closeModal()
		dispatch(turnOnRegistration())
	}


	const baseUrl = 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/'
	const profileUrl = 'profile'


	useEffect(function cond() {
		console.log(data.isSuccess)
		if (data.isSuccess) {
			localStorage.setItem('token', data?.data?.token as string)
			fetch(baseUrl + profileUrl, {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
			})
				.then(promiseResult => promiseResult.json())
				.then(body => setData(body.balance, body.email))
		}
	}, [data.isSuccess])

	fetch(baseUrl + profileUrl, {
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('token')}`
		}
	})
		.then(promiseResult => promiseResult.json())
		.then(body => setData(body.balance, body.email))

	function setData(balanceFetch: number | undefined, emailFetch: string | undefined) {
		dispatch(setBalance(balanceFetch))
		dispatch(setEmail(emailFetch))
		console.log('работает')

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
							closeModal()
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

