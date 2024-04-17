import React from 'react';
import cls from './InfoTabs.module.scss'
import {Button} from "../../../shared/ui";

const AboutUsTab = () => {
    return (
        <div className={cls.aboutUsTab}>
            <div className='row'>
                <div className="col-6">
                    <div className={cls.box}>
                        <p>О нас</p>
                        <p>За 8 лет в сфере недвижимости, мы набрались колоссального <br/> опыта и помогли более 5000 клиентам!
                            <br/><br/>
                            Высокий сервис и безупречное качество предоставления услуг – <br/> это фундамент, на котором строится
                            работа нашей команды.</p>
                        <br/><br/>
                        <Button text={'Подробнее'} style={'viewAll'}/>
                    </div>
                </div>
                <div className="col-6">
                    <div className={cls.box}>
                        <img src="https://ned.kg/wp-content/uploads/img/ZHS_2510-scaled.jpeg" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUsTab;
