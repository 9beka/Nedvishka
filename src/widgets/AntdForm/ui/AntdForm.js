import React, { useEffect, useState } from "react";
import cls from "./AntdForm.module.scss";
import { Button, Form, Select, InputNumber, Input } from "antd";
import { RoomButton, SelectChecboxes } from "../../../shared/ui";
import { nameOfMainDistrict, SelectData } from "../../../shared/constants";
import ModalOfCheckboxes from "../../../features/ui/ModalOfCheckboxes/ModalOfCheckboxes";
import MediaQuery from "react-responsive";
import { floorsArray } from "../../../shared/constants";
import { MapOfCity } from "../../../features/2gisMap/ui";
const { Option } = Select;
const { TextArea } = Input;

const AntdForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Form
        form={form}
        name="min 992"
        onFinish={onFinish}
        className={cls.AntdForm__form}
        style={{
          maxWidth: `${
            screenWidth <= 768 ? "100%" : screenWidth <= 992 ? "100%" : "50%"
          }`,
        }}
      >
        <div
        className={cls.AntdForm__wrapper}
          style={{
            gridTemplateColumns: `${
              screenWidth <= 768 ? "repeat(1,1fr)" : "repeat(2,1fr)"
            }`,
          }}
        >
          <Form.Item  name="Tip sdelki">
            <label className={cls.label__form}>Тип сделки</label>
            <Select placeholder="Выберите из списка" allowClear>
              <Option value="secondary">Продажа</Option>
              <Option value="houses">Аренда</Option>
            </Select>
          </Form.Item>
          <Form.Item  name="Tip nedvishki">
            <label className={cls.label__form}>Тип недвижимости</label>
            <Select placeholder="Выберите" allowClear>
              <Option value="Vtorichka">Вторичная</Option>
              <Option value="houses&plots">Дома и участки</Option>
              <Option value="Commerce">Коммерческая</Option>
              <Option value="elitka">Элетка</Option>
              <Option value="parking">Парковка</Option>
            </Select>
          </Form.Item>
          <Form.Item  name="Rooms">
            <label className={cls.label__form}>Комнат</label>
            <RoomButton />
          </Form.Item>
          <Form.Item  name="Ploshad m2">
            <label className={cls.label__form}>
           Площадь м<sup>2</sup>
            </label>
            <InputNumber
              min={1}
              placeholder="0"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
          <Form.Item  name="Floor">
            <label className={cls.label__form}>Этаж</label>
            <Select placeholder="Выберите" allowClear>
              {floorsArray.map((el) => {
                return <Option value={el.value}>{el.name}</Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item  name="Total floor">
            <label className={cls.label__form}>Из всего этажей</label>
            <InputNumber
              min={1}
              placeholder="0"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
        </div>

        <Form.Item name="Name of owner" >
          <label className={cls.label__form}>Ваше имя</label>
          <Input
            style={{ border: "2px solid #6CA5DC" }}
            placeholder="Ваше имя"
          />
        </Form.Item>

        <div
        className={cls.AntdForm__wrapper}
          style={{
            gridTemplateColumns: `${
              screenWidth <= 768 ? "repeat(1,1fr)" : "repeat(2,1fr)"
            }`,
          }}
        >
          <Form.Item  name="Tel number" >
            <label className={cls.label__form}>Телефон владельца</label>
            <Input
              placeholder="Введите номер владельца" 
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
          <Form.Item  name="addition Tel number" >
            <label className={cls.label__form}>Дополнительный телефон владельца</label>
            <Input
              placeholder="Введите номер владельца" 
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
          <Form.Item  name="Districts" >
            <label className={cls.label__form}>Районы</label>
            <ModalOfCheckboxes data={nameOfMainDistrict}/>
          </Form.Item>
          <Form.Item  name="Street around">
            <label className={cls.label__form}>Пересечение улиц</label>
            <Input
              placeholder="Введите пересечение улиц"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
        </div>
        <Form.Item name="Tag coordination" >
          <Button style={{ width:"100%" ,backgroundColor: "purple" , color: "white" ,border: "2px solid purple" , textAlign: "center" }}>Разместите Маркер и адрес собственности</Button>
        </Form.Item>
        <MapOfCity/>
      </Form>
    </>
  );
};
{/* <Form.Item>
<Button
  style={{ width: "100%",  }}
  type="primary"
  htmlType="submit"
>
  Добавить объявление
</Button>
</Form.Item> */}
export default AntdForm;
