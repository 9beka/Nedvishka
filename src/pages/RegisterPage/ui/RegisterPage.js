import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form } from "antd";
import { renderItemForm } from "../../../shared/constants";
import cls from "./RegisterPage.module.scss";
import { REGISTER_ASYNC } from "../../../app/providers/Redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import { MyLoader } from "../../../shared/ui";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const { showAlert } = useSelector((state) => state.alert);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    const { confirmPassword, remember, ...newObject } = values;
    dispatch(REGISTER_ASYNC(newObject));
    const token = localStorage.getItem("token");
    const checkToken = () => {
      if (token) {
        navigate("/");
        window.location.reload();
      } else {
        setTimeout(checkToken, 1000);
      }
    };
    checkToken();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(showAlert);

  return (
    <>
      {loading && <MyLoader />}

      <ToastContainer enableMultiContainer containerId={"check-token"} />

      <div className={cls.register}>
        <Form
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={cls.register__form}
        >
          <p className={cls.register__title}>Регистрация</p>

          {renderItemForm.map((item) => {
            const { label, name, rules, children } = item;
            return (
              <Form.Item
                label={label}
                name={name}
                labelCol={{ span: 24 }}
                style={{
                  width: "100%",
                }}
                rules={rules}
                key={name}
              >
                {children}
              </Form.Item>
            );
          })}

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox onClick={() => setChecked((prevState) => !prevState)}>
              Запомнить меня
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button disabled={loading} type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to={"/login"}>Уже есть аккаунт?</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegisterPage;
