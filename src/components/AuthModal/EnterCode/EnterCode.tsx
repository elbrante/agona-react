import React from 'react'
import Modal from 'react-modal'
import {Form, Formik} from 'formik'
import cl from './EnterCode.module.sass'
import X from '../../../asserts/closeX.svg'
import {Input} from '../InputFields/Input'
import {ButtonAuth} from '../ButtonAuth/ButtonAuth'

interface Props {
    modalAuth: boolean
    closeModal: () => void
}


export const EnterCode = ({modalAuth, closeModal}: Props) => {
	return (
		<>
			<Modal isOpen={modalAuth}
				className={cl.wrapperAuth}
				overlayClassName={cl.overlay}
				onRequestClose={closeModal}
			>
				<Formik initialValues={{code: '',}} onSubmit={() => {

				}}>
					<Form className={cl.auth}>
						<div className={cl.authHeader}>
							<span>Ввести код</span>
							<img onClick={closeModal} src={X} alt=""/>
						</div>
						<div className={cl.wrapperInfo}>
							<div className={cl.item1}>
								<div className={cl.itemPhone}>
									<span>Введите код отправленный вам на телефон</span>
									<span className={cl.phone}>+7 (917) 888 88 88</span>
								</div>
								<Input placeholder='Код'/>
							</div>
							<div className={cl.item2}>
								<ButtonAuth theme='GREEN'>Отправить</ButtonAuth>
								<span>Не получил(-а) код</span>
							</div>
							<ButtonAuth theme={'GRAY'}>Вход для партнёров</ButtonAuth>
						</div>
					</Form>
				</Formik>
			</Modal>
		</>
	)
}

