import React from 'react'
import cls from './AboutPage.module.scss'
import aboutPageInfo from '../../shared/assets/img/aboutpage-info-image.jpg'

const AboutPage = () => {
    return (
        <section className={cls.aboutPage}>

            <div className={cls.aboutPage__image}>
                <p>Мурас недвижимость</p>
                <p>ВЕДУЩЕЕ АГЕНТСТВО НЕДВИЖИМОСТИ НА РЫНКЕ КЫРГЫЗСТАНА</p>
            </div>

            <div className={cls.aboutPage__info}>
                <div className="container">
                    <p className={cls.aboutPage__title}>Агентство недвижимости в Бишкеке и Оше</p>
                    <div className={cls.aboutPage__wrap}>
                        <div>
                            <p>Агентство недвижимости «Мурас недвижимость» в городах Бишкек и Ош –
                                ведущая компания в сфере недвижимости.
                                Мы собрали в одном месте лучших экспертов
                                рынка, чтобы предложить клиентам лучшее –
                                профессиональные рекомендации и самые
                                выгодные предложения по продаже и
                                покупке недвижимости!</p>
                            <p>Высокий сервис и безупречное качество
                                предоставления услуг – это фундамент, на
                                котором строится работа всей нашей
                                команды. Мы за прозрачность и открытость в
                                сделках!</p>
                        </div>
                        <img src={aboutPageInfo} alt="About Page info "/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutPage
