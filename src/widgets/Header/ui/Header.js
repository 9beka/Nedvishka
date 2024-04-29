import React, {useEffect, useState} from "react";
import logoIcon from '../../../shared/assets/svg/logo.svg'
import "./Header.scss";
import {Link} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {classNames} from "../../../shared/helpers";
import {slide as Menu} from 'react-burger-menu';
import {PlusOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {setAlert} from "../../../app/providers/Redux/Slices/alertSlicer";


const Header = () => {

    const dispatch = useDispatch()
    const token = localStorage.getItem('token')

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

    const [open, setOpen] = useState(false)


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const showSettings = (event) => {
    //     event.preventDefault();
    // };

    const handleClick = () => {
        dispatch(setAlert(true))
        setTimeout(() => dispatch(setAlert(false)), 5000)
    }

    const bmButton = document.querySelector('.bm-cross-button');

    bmButton?.addEventListener('click', () => {
        setOpen(false);
    });



    return (
        <div className={classNames("header")}>
            <div className="container">
                <div className={classNames("header__wrap")}>


                    <img src={logoIcon} alt="Logo"/>

                    {windowWidth <= 768 ? (

                            <>
                                <Menu onOpen={() => setOpen(true)} isOpen={open} right>

                                    <div className='bm-item-links'>
                                        {renderLinks.map(el => (
                                            <Link key={el.name} onClick={() => {
                                                if (el.name === 'О компании') {
                                                    handleClick();
                                                    setOpen(false);
                                                } else {
                                                    setOpen(false);
                                                }
                                            }}
                                                  to={el.to}>{el.name}</Link>
                                        ))}
                                    </div>

                                    <div className={classNames('header__right-add-btn')}>
                                        <button className={classNames('header__btn')} onClick={() => {
                                            handleClick();
                                            setOpen(false);
                                        }}
                                        ><span><PlusOutlined/></span><Link
                                            to={`${token ? '/ads' : '/register'}`}>Добавить объявление</Link></button>
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
                                    <Link key={el.name} className={classNames('header__links')} onClick={() => {
                                        if (el.name === 'О компании') {
                                            handleClick();
                                            setOpen(false);
                                        } else {
                                            setOpen(false);
                                        }
                                    }} to={el.to}>{el.name}</Link>
                                ))}
                            </ul>
                            <div className={classNames("header__right")}>

                                <Link to={'/favoties'}>
                                    <FavoriteIcon style={{
                                        cursor:'pointer'
                                    }} className={classNames('header__favorite-icon')}/>
                                </Link>


                                <LocalPhoneIcon className={classNames('header__phone-icon')}/>

                                <div className={classNames('header__right-phone')}>
                                    <span>+996 507 688 388</span>
                                </div>
                                <div className={classNames('header__right-add-btn')}>

                                    {windowWidth <= 992
                                        ? <button className={classNames('header__btn')} onClick={handleClick}><Link
                                            to={`${token ? '/ads' : '/register'}`}><PlusOutlined/></Link>
                                        </button>
                                        : <button className={classNames('header__btn')} onClick={handleClick}><span><PlusOutlined/></span><Link
                                            to={`${token ? '/ads' : '/register'}`}>Добавить объявление</Link></button>}
                                </div>
                            </div>
                        </>
                    }

                </div>
            </div>

        </div>
    )
};

export default Header;