import React, { useState , useEffect } from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeTokenFromLS } from "../../../../../app/providers/Redux/Slices/authSlicer";
const LogOutBtn = () => {
  const [loadings, setLoadings] = useState([]);
  const dispatch = useDispatch();
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    dispatch(removeTokenFromLS("token"));
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;

        return newLoadings;
      });
    }, 3000);
  };

  return (
    <Button
      danger
      type="primary"
      icon={<LogoutOutlined />}
      loading={loadings[1]}
      onClick={() => enterLoading(1)}
    >
      Выйти
    </Button>
  );
};

export default LogOutBtn;
