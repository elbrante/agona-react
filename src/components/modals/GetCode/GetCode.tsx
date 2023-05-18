import React from 'react'
import {Form, Formik} from 'formik'
import Modal from 'react-modal'
import cl from './GetCode.module.sass'
import X from '../../../asserts/closeX.svg'
import {Input} from '../../InputFields/Input'
import {LinkAuth} from '../../LinkAuth/LinkAuth'
import {ButtonAuth} from '../../ButtonAuth/ButtonAuth'
import {EnterCode} from '../EnterCode/EnterCode'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../store/store'
import {turnOffEnterCode, turnOnEnterCode} from '../../../store/EnterCode'
import * as yup from 'yup'

interface Props {
	modalAuth: boolean
	closeModal: () => void
}


const GetCode = ({modalAuth, closeModal}: Props) => {

	const stateEnter = useSelector((state: RootState) => state.showEnterCode.isOpenModal)
	const dispatch = useDispatch()

	function openEnterCode() {
		closeModal()
		dispatch(turnOnEnterCode())
	}

	const validationGetCode = yup.object({
		phone: yup.string().required(),
	})


	return (
		<>
			<Modal isOpen={modalAuth}
				   className={cl.wrapperAuth}
				   overlayClassName={cl.overlay}
				   onRequestClose={closeModal}
			>
				<Formik
					validationSchema={validationGetCode}
					initialValues={{
						phone: '',
					}}
					onSubmit={() => {
					}}>
					{({
						  errors
					  }) => (
						<Form className={cl.auth}>
							<div className={cl.authHeader}>
								<span>Вход или регистрация</span>
								<button>
									<img src={X} alt="Закрыть модальное окно" onClick={closeModal}/>
								</button>
							</div>
							<div className={cl.authMain}>
								<Input placeholder={'Телефон'}/>

								{errors.phone && (
									<div className={cl.error}>
										{errors.phone}
									</div>
								)}

								<div className={cl.twoLinks}>
									<ButtonAuth theme={'GREEN'} onClick={() => openEnterCode()}>Получить
										код</ButtonAuth>
									<LinkAuth>Я уже зарегистировался(-ась)</LinkAuth>
								</div>
								<ButtonAuth theme={'GRAY'}>Вход для партнёров</ButtonAuth>
							</div>
						</Form>
					)}
				</Formik>
			</Modal>
			<EnterCode modalAuth={stateEnter} closeModal={() => dispatch(turnOffEnterCode())}/>
		</>
	)
}

export default GetCode