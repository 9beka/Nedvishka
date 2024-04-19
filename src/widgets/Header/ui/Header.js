import React, {useEffect, useState} from "react";
import logoIcon from '../../../shared/assets/svg/logo.svg'
import "./Header.scss";
import {Link} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {classNames} from "../../../shared/helpers";
import {slide as Menu} from 'react-burger-menu';


const Header = () => {

    const renderLinks = [
        {
            name: 'Главная',
            to: '/'
        },
        {
            name: 'О компании',
            to: '/about'
        },
        {
            name: 'Услуги',
            to: ''
        },
        {
            name: 'Контакты',
            to: ''
        },
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showSettings = (event) => {
        event.preventDefault();
    };


    return (
        <div className={classNames("header")}>
            <div className="container">
                <div className={classNames("header__wrap")}>


                    <img src={logoIcon} alt="Logo"/>

                    {windowWidth <= 768 ? (

                        <>
                            <Menu right>

                                <div className='bm-item-links'>
                                    {renderLinks.map(el => (
                                        <Link to={el.to}>{el.name}</Link>
                                    ))}
                                </div>


                                <div className='bm-item-info'>


                                    <LocalPhoneIcon className={classNames('header__phone-icon')}/>

                                    <div className={classNames('header__right-phone')}>
                                        <span>+996 507 688 388</span>
                                    </div>
                                </div>

                            </Menu>

                            <div className={classNames("header__right")}>
                                <FavoriteIcon className={classNames('header__favorite-icon')}/>
                            </div>
                        </>

                        ) :
                        <>
                            <ul>
                                {renderLinks.map(el => (
                                    <Link to={el.to}>{el.name}</Link>
                                ))}
                            </ul>
                            <div className={classNames("header__right")}>

                                <FavoriteIcon className={classNames('header__favorite-icon')}/>

                                <LocalPhoneIcon className={classNames('header__phone-icon')}/>

                                <div className={classNames('header__right-phone')}>
                                    <span>+996 507 688 388</span>
                                </div>
                            </div>
                        </>
                    }



                </div>
            </div>

};

export default Header;
