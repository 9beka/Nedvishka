import React, { useEffect, useState } from "react";
import cls from "./AntdForm.module.scss";
import { Button, Form, Select, InputNumber, Input, Switch } from "antd";
import { RoomButton, UploadComponent } from "../../../shared/ui";
import {
  documents,
  furnitures,
  nameOfMainDistrict,
  typeNedvishki,
  ownersOfHouse,
  paymentOption,
  stateData,
  statusObject,
  communications,
} from "../../../shared/constants";
import ModalOfCheckboxes from "../../../features/ui/ModalOfCheckboxes/ModalOfCheckboxes";
import { floorsArray } from "../../../shared/constants";
import { MapOfCity } from "../../../features/2gisMap/ui";
import TextArea from "antd/es/input/TextArea";
import HocAdaptiveWrapper from "./HocAdaptiveWrapper";

const AntdForm = () => {
  const { Option } = Select;
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
        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item name="typeOfDeal">
            <label className={cls.label__form}>Тип сделки</label>
            <Select mode="tags" placeholder="Выберите из списка" allowClear>
              <Option value="secondary">Продажа</Option>
              <Option value="houses">Аренда</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Tip nedvishki">
            <label className={cls.label__form}>Тип недвижимости</label>
            <Select placeholder="Выберите" allowClear>
              {typeNedvishki.map((el) => (
                <Option value={el.value}>{el.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="Rooms">
            <label className={cls.label__form}>Комнат</label>
            <RoomButton />
          </Form.Item>
          <Form.Item name="Ploshad m2">
            <label className={cls.label__form}>
              Площадь м<sup>2</sup>
            </label>
            <InputNumber
              min={1}
              name="Ploshad m2"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
          <Form.Item name="Floor">
            <label className={cls.label__form}>Этаж</label>
            <Select placeholder="Выберите" allowClear>
              {floorsArray.map((el) => (
                <Option value={el.value}>{el.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="Total floor">
            <label className={cls.label__form}>Из всего этажей</label>
            <InputNumber
              min={1}
              name="Total floor"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
        </HocAdaptiveWrapper>

        <Form.Item name="ownerName">
          <label className={cls.label__form}>Ваше имя</label>
          <Input
            style={{ border: "2px solid #6CA5DC" }}
            placeholder="Ваше имя"
          />
        </Form.Item>
        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item name="Tel number">
            <label className={cls.label__form}>Телефон владельца</label>
            <Input
              placeholder="Введите номер владельца"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
          <Form.Item name="addition Tel number">
            <label className={cls.label__form}>
              Дополнительный телефон владельца
            </label>
            <Input
              placeholder="Введите номер владельца"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
          <Form.Item name="Districts">
            <label className={cls.label__form}>Районы</label>
            <ModalOfCheckboxes data={nameOfMainDistrict} />
          </Form.Item>
          <Form.Item name="Street around">
            <label className={cls.label__form}>Пересечение улиц</label>
            <Input
              placeholder="Введите пересечение улиц"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
        </HocAdaptiveWrapper>
        <Form.Item name="Tag coordination">
          <Button className={cls.AntdForm__marker__btn}>
            Разместите Маркер и адрес собственности
          </Button>
        </Form.Item>
        <MapOfCity />
        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item name="Sostoyanie">
            <label className={cls.label__form}>Состояние</label>
            <Select placeholder="Выберите" allowClear>
              {stateData.map((el) => (
                <Option value={el.value}>{el.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="Documents">
            <label className={cls.label__form}>Документы</label>
            <Select placeholder="Выберите" allowClear>
              {documents.map((el) => (
                <Option value={el.value}>{el.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="Documents">
            <label className={cls.label__form}>Коммуникации</label>
            <Select placeholder="Коммуникации" allowClear>
              {communications.map((el) => (
                <Option value={el.value}>{el.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="TypeOffer">
            <label className={cls.label__form}>Тип предложения</label>
            <Select placeholder="Выберите" allowClear>
              {ownersOfHouse.map((el) => {
                return <Option value={el.value}>{el.name}</Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item name="furniture">
            <label className={cls.label__form}>Мебель</label>
            <Select placeholder="Выберите" allowClear>
              {furnitures.map((el) => {
                return <Option value={el.value}>{el.name}</Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item name="Payment">
            <label className={cls.label__form}>Вид платежа</label>
            <Select placeholder="Выбрать" allowClear>
              {paymentOption.map((el) => {
                return <Option value={el.value}>{el.name}</Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item name="StatusObject">
            <label className={cls.label__form}>Статус объекта</label>
            <Select placeholder="Выбрать" allowClear>
              {statusObject.map((el) => {
                return <Option value={el.value}>{el.name}</Option>;
              })}
            </Select>
          </Form.Item>
        </HocAdaptiveWrapper>
        <label className={cls.label__form}>Описание</label>
        <Form.Item name="Texteditor">
          <div className={cls.AntdForm__textArea__Wrapper}>
            <Button className={cls.AntdForm__btn}>СОЗДАТЬ ИИ ОПИСАНИЕ</Button>
            <TextArea />
          </div>
        </Form.Item>
        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item name="PriceForm">
            <label className={cls.label__form}>
              Цена в <span> </span>
              <Switch
                checkedChildren="СОМ"
                unCheckedChildren="$"
                defaultChecked
              />
            </label>
            <InputNumber
              min={1}
              name="Price Form"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
          <Form.Item name="Price on hands">
            <label className={cls.label__form}> Цена руки</label>
            <InputNumber
              min={1}
              name="Price on hands"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
            />
          </Form.Item>
        </HocAdaptiveWrapper>
        <label className={cls.label__form}>
          Примечание от владельца / агента (* не отображается в интерфейсе
          гостей)
        </label>
        <TextArea />
        <Form.Item name="Upload">
          <label className={cls.label__form}> Фото</label>
          <UploadComponent />
        </Form.Item>
        <Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Добавить объявление
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AntdForm;
