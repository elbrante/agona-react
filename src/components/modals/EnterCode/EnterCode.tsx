import React from 'react'
import Modal from 'react-modal'
import {Form, Formik} from 'formik'
import cl from './EnterCode.module.sass'
import X from '../../../assets/closeX.svg'
import {Input} from '../../InputFields/Input'
import {ButtonAuth, Theme} from '../../ButtonAuth/ButtonAuth'
import * as yup from 'yup'

interface Props {
    modalAuth: boolean
    closeModal: () => void
}


const validationEnterCode = yup.object({
	code: yup.string().required(),
})


export const EnterCode = ({modalAuth, closeModal}: Props) => {
	return (
		<>
			<Modal isOpen={modalAuth}
				className={cl.wrapperAuth}
				overlayClassName={cl.overlay}
				onRequestClose={closeModal}
			>
				<Formik
					initialValues={{code: '',}}
					onSubmit={() => {
					}}
					validationSchema={validationEnterCode}
				>
					{({
						errors
					}) => (
						<Form className={cl.auth}>
							<div className={cl.authHeader}>
								<span>Ввести код</span>
								<button>
									<img onClick={closeModal} src={X} alt=""/>
								</button>
							</div>
							<div className={cl.wrapperInfo}>
								<div className={cl.item1}>
									<div className={cl.itemPhone}>
										<span>Введите код отправленный вам на телефон</span>
										<span className={cl.phone}>+7 (917) 888 88 88</span>
									</div>
									<Input placeholder='Код'/>

									{errors.code && (
										<div className={cl.error}>
											{errors.code}
										</div>
									)}

								</div>
								<div className={cl.item2}>
									<ButtonAuth theme={Theme.GREEN}>Отправить</ButtonAuth>
									<span>Не получил(-а) код</span>
								</div>
								<ButtonAuth theme={Theme.GRAY}>Вход для партнёров</ButtonAuth>
							</div>
						</Form>
					)}

				</Formik>
			</Modal>
		</>
	)
}

