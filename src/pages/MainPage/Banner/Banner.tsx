import React from 'react'
import cl from './Banner.module.sass'


interface Banner {
    title: string
    subtitle: string
    textInButton: string
    img: string
    backgroundColor: string
}


export const Banner = ({title, subtitle, textInButton, img, backgroundColor}: Banner) => {
	return (
		<div className={cl.banner} style={{backgroundColor: backgroundColor}}>
			<div className={cl.leftPart}>
				<div className={cl.text}>
					<div className={cl.title}>
						{title}
					</div>
					<div className={cl.subTitle}>
						{subtitle}
					</div>
				</div>
				<button className={cl.conditionButton}>
					{textInButton}
				</button>
			</div>
			<img className={cl.img} src={img} alt="recycling"/>
		</div>
	)
}

