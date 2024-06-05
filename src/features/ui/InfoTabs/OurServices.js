import React from 'react';
import cls from "./InfoTabs.module.scss";
import {Button} from "../../../shared/ui";
import MediaQuery from "react-responsive";
import OurServicesImg  from '../../../shared/assets/img/OurServicesImg.jpg';
const OurServices = () => {
    return (

        <>

            <MediaQuery minWidth={768}>
                <div className={cls.aboutUsTab}>
                    <div className='row'>
                        <div className="col-6">
                            <div className={cls.box}>
                                <img className={cls.serviceImg} src={OurServicesImg} alt=""/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cls.box}>
                                <p>Наши услуги
                                </p>
                                <p>Мы предоставляем полный комплекс услуг, т.е. туда входит: услуги <br/> риелтора, юридическое
                                    сопровождение; а также бесплатная <br/> консультация.</p>
                                <br/><br/>
                                <Button text={'Подробнее'} style={'viewAll'}/>
                            </div>
                        </div>

                    </div>
                </div>

            </MediaQuery>

            <MediaQuery maxWidth={768}>
                <div className={cls.aboutUsTab}>
                    <div className='row'>
                        <div className="col-12">
                            <div className={cls.box}>
                                <img className={cls.serviceImg} src="https://ned.kg/wp-content/uploads/img/Rectangle-7.png?v=1632727285" alt=""/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className={cls.box}>
                                <p>Наши услуги
                                </p>
                                <p>Мы предоставляем полный комплекс услуг, т.е. туда входит: услуги <br/> риелтора, юридическое
                                    сопровождение; а также бесплатная <br/> консультация.</p>
                                <br/><br/>
                                <Button text={'Подробнее'} style={'viewAll'}/>
                            </div>
                        </div>

                    </div>
                </div>

            </MediaQuery>


        </>
    );
};

export default OurServices;
