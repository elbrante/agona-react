import React from 'react'
import promo1000 from '../../../assets/promo1000.svg'
import cl from './PromoItem.module.sass'


interface Props {
    imgPromo: string;
    dataProp: string;
    link: string;
}


export const PromoItem = ({imgPromo, dataProp, link}: Props) => {
	return (
		<div>
			<div className={cl.wrapperMain}>
				<img src={imgPromo} alt=''/>
				<div className={cl.wrapper}>
					<div className={cl.info}>
						<div className={cl.data}>
							<span className={cl.dataTitle}>Дата создания:</span>
							<span className={cl.dataProp}>{dataProp}</span>
						</div>
						<div className={cl.link}>
							<span className={cl.linkTitle}>Ссылка на товар:</span>
							<span>{link}</span>
						</div>
					</div>
					<button className={cl.buttonQR}>Показать qr-код</button>
				</div>
			</div>
			<hr className={cl.line}/>
		</div>
	)
}

