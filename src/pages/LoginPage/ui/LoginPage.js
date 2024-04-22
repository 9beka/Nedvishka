import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Checkbox, Form} from 'antd';
import {renderItemFormLogin} from "../../../shared/constants";
import cls from './LoginPage.module.scss'
import background from '../../../shared/assets/video/register-background.mp4'
import {LOGIN_ASYNC} from "../../../app/providers/Redux/actions/actions";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.auth)

    const onFinish = (values) => {
        const {confirmPassword, remember, ...newObject} = values;
        dispatch(LOGIN_ASYNC(newObject))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (

        <div className={cls.login}>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: '-1',
                }}
            >
                <source src={background} type="video/mp4"/>
            </video>

            <Form
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={cls.login__form}
            >
                <p className={cls.login__title}>Логин</p>
                {
                    renderItemFormLogin.map(item => {
                            const {label, name, rules, children} = item
                            return <Form.Item
                                label={label}


                                name={name}
                                labelCol={{span: 24}}
                                style={{
                                    width: '100%',
                                }}
                                rules={rules}
                                key={name}
                            >
                                {children}
                            </Form.Item>
                        }
                    )
                }

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox onClick={() => setChecked(prevState => !prevState)}>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button
                        disabled={!checked || loading}
                        type="primary"
                        htmlType="submit"
                    >
                        Войти
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link to={'/register'}>Ёще нет аккаунта?</Link>
                </Form.Item>
            </Form>
        </div>

    );
};

export default LoginPage;
