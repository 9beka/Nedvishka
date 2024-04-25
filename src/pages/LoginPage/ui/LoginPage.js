import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Checkbox, Form} from 'antd';
import {renderItemFormLogin} from "../../../shared/constants";
import cls from './LoginPage.module.scss'
import {LOGIN_ASYNC} from "../../../app/providers/Redux/actions/actions";
import {Link, useNavigate} from "react-router-dom";
import {MyLoader} from "../../../shared/ui";

const LoginPage = () => {
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {loading} = useSelector(state => state.auth)

    const onFinish = async (values) => {
        const {confirmPassword, remember, ...newObject} = values;
        await dispatch(LOGIN_ASYNC(newObject));
        const token = localStorage.getItem('token');

        const checkToken = () => {
            if (token) {
                navigate('/');
                window.location.reload();
            } else {
                setTimeout(checkToken, 1000);
            }
        }
        checkToken();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (


        <>
            {loading && <MyLoader/>}

            <div className={cls.login}>


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
                            // onClick={()=>navigate('/')}
                        >
                            Войти
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to={'/register'}>Ёще нет аккаунта?</Link>
                    </Form.Item>
                </Form>
            </div>

        </>


    );
};

export default LoginPage;
