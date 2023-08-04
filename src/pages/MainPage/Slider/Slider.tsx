import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import cl from './Slider.module.sass'

import 'swiper/css'
import {Banner} from '../Banner/Banner'
import recycling from '../../../assets/recycling-concept.png'
import recycling2 from '../../../assets/recycling-concept2.png'
import recycling3 from '../../../assets/recycling-concept3.png'


export const Slider = () => {

	return (
		<div className={cl.mainWrapper}>
			<Swiper
				slidesPerView={1}
				navigation
				modules={[Navigation]}
				className={cl.swiper}>

				<SwiperSlide>
					<Banner title={'Сделаем мир чище'}
						subtitle={'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных\n' +
                                '                        материалов'}
						textInButton={'Условия сервиса'}
						img={recycling}
						backgroundColor={'#B3EDC8'}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<Banner
						title={'А вы знали...'}
						subtitle={'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а\n' +
                            '                        полиэтиленовых пакетов — от 100 до 200 лет?'}
						textInButton={'Узнать больше'}
						img={recycling2}
						backgroundColor={'#FFE48F'}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<Banner
						title={'Что с масками?'}
						subtitle={'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на\n' +
                            '                        переработку.'}
						textInButton={'Пункты сбора масок'}
						img={recycling3}
						backgroundColor={'#BFF0DE'}
					/>
				</SwiperSlide>

			</Swiper>
		</div>

	)
}
