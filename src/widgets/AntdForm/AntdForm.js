import React, { useEffect, useState } from "react";
import cls from "./AntdForm.module.scss";
import { Button, Form, Select, InputNumber, Input, Switch } from "antd";
import { MyLoader, RoomButton, UploadComponent } from "../../shared/ui";
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
} from "../../shared/constants";
import ModalOfCheckboxes from "../../features/ui/ModalOfCheckboxes/ModalOfCheckboxes";
import { floorsArray } from "../../shared/constants";
import { MapOfCity } from "../../features/2gisMap/ui";
import HocAdaptiveWrapper from "./HocAdaptiveWrapper";
import { useDispatch, useSelector } from "react-redux";
import { ADS_POST_ASYNC } from "../../app/providers/Redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import { AIdescription } from "./ui";

const AntdForm = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { loading } = useSelector((state) => state.ads);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  console.log(fileList);

  const notifySuccessAddAds = (title) =>
    toast.success(title, {
      containerId: "success-add-ads",
    });
    const onFinish = (values) => {
      dispatch(ADS_POST_ASYNC(values));
      // form.resetFields();
      setFileList([]);
      setYourName("");
      setTextAreaValue("");
      notifySuccessAddAds("Вы успешно добавили объявление!");
      console.log(values);
    };
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
      {loading && <MyLoader />}
      <ToastContainer containerId="success-add-ads" />
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
          <Form.Item
            name="typeOfDeal"
            rules={[{ required: true, message: "Выберите тип сделки" }]}
          >
            <label className={cls.label__form}>Тип сделки</label>
            <Select
              placeholder="Выберите из списка"
              allowClear
              onChange={(value) => transactionTypeFunction(value)}
            >
              <Option value="Продажа">Продажа</Option>
              <Option value="Аренда">Аренда</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="TipNedvishki"
            rules={[{ required: true, message: "Выберите тип недвижимости" }]}
          >
            <label className={cls.label__form}>Тип недвижимости</label>
            <Select
              placeholder="Выберите"
              allowClear
              onChange={(value) => propertyTypeFunction(value)}
            >
              {typeNedvishki.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="Rooms"
            rules={[{ required: true, message: "Выберите количество комнат" }]}
          >
            <label className={cls.label__form}>Комнаты</label>
            <RoomButton rooms={rooms} handleValueRooms={handleValueRooms} />
          </Form.Item>

          <Form.Item
            name="PloshadM2"
            rules={[
              { required: true, message: "Введите площадь в м²" },
              { type: "number", message: "Введите число" },
            ]}
          >
            <label className={cls.label__form}>
              Площадь м<sup>2</sup>
            </label>
            <InputNumber
              min={1}
              name="PloshadM2"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => areaFunction(value)}
            />
          </Form.Item>

          <Form.Item
            name="Floor"
            rules={[{ required: true, message: "Выберите этаж" }]}
          >
            <label className={cls.label__form}>Этаж</label>
            <Select
              onChange={(value) => floorFunction(value)}
              placeholder="Выберите"
              allowClear
            >
              {floorsArray.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="TotalFloor"
            rules={[
              {
                required: true,
                message: "Введите общее количество этажей в здании",
              },
            ]}
          >
            <label className={cls.label__form}>Из всего этажей</label>
            <InputNumber
              min={1}
              name="TotalFloor"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => totalFloorFunction(value)}
            />
          </Form.Item>
        </HocAdaptiveWrapper>

        <Form.Item
          name="ownerName"
          rules={[{ required: true, message: "Введите ваше имя" }]}
        >
          <label className={cls.label__form}>Ваше имя</label>
          <Input
            style={{ border: "2px solid #6CA5DC" }}
            placeholder="Ваше имя"
            value={yourName}
            onChange={(e) => yourNameFunction(e)}
          />
        </Form.Item>

        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item
            name="TelNumber"
            rules={[
              {
                required: true,
                message: "Введите номер владельца",
              },
              {
                type: "number",
                message: "Введите номер в числовом формате",
              },
              {
                validator: validatePhoneNumber,
              },
            ]}
          >
            <label className={cls.label__form}>
              Телефон владельца (996700000000)
            </label>
            <InputNumber
              placeholder="Введите номер владельца"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => ownersPhoneNumberFunction(value)}
            />
          </Form.Item>

          <Form.Item
            name="additionTelNumber"
            rules={[
              {
                required: true,
                message: "Введите дополнительный номер владельца",
              },
              {
                type: "number",
                message: "Введите номер в числовом формате",
              },
            ]}
          >
            <label className={cls.label__form}>
              Дополнительный телефон владельца
            </label>
            <InputNumber
              placeholder="Введите номер владельца"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => {
                form.setFieldsValue({ additionTelNumber: value });
              }}
            />
          </Form.Item>

          <Form.Item
            name="Districts"
            rules={[{ required: true, message: "Выберите район(ы)" }]}
          >
            <label className={cls.label__form}>Районы</label>
            <ModalOfCheckboxes
              handleValueDistrict={handleValueDistrict}
              data={nameOfMainDistrict}
            />
          </Form.Item>

          <Form.Item
            name="StreetAround"
            rules={[{ required: true, message: "Введите пересечение улиц" }]}
          >
            <label className={cls.label__form}>Пересечение улиц</label>
            <Input
              placeholder="Введите пересечение улиц"
              className={cls.AntdForm__InputNumber}
              onChange={(e) => streetCrossingFunction(e)}
            />
          </Form.Item>
        </HocAdaptiveWrapper>

        <Form.Item name="TagCoordination">
          <Button className={cls.AntdForm__marker__btn}>
            Разместите Маркер и адрес собственности
          </Button>
        </Form.Item>

        <MapOfCity />

        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item
            name="Sostoyanie"
            rules={[{ required: true, message: "Выберите состояние объекта" }]}
          >
            <label className={cls.label__form}>Состояние</label>
            <Select
              placeholder="Выберите"
              allowClear
              onChange={(value) => stateFunction(value)}
            >
              {stateData.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="Documents"
            rules={[{ required: true, message: "Выберите документы" }]}
          >
            <label className={cls.label__form}>Документы</label>
            <Select
              placeholder="Выберите"
              allowClear
              onChange={(value) => documentationFunction(value)}
            >
              {documents.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="communication"
            rules={[
              {
                required: true,
                message: "Выберите хотя бы один вид коммуникаций",
              },
            ]}
          >
            <label className={cls.label__form}>Коммуникации</label>
            <Select
              mode={"multiple"}
              placeholder="Коммуникации"
              allowClear
              onChange={(value) => communicationsStateFunction(value)}
            >
              {communications.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="TypeOffer"
            rules={[{ required: true, message: "Выберите тип предложения" }]}
          >
            <label className={cls.label__form}>Тип предложения</label>
            <Select
              placeholder="Выберите"
              allowClear
              onChange={(value) => typeOfSentenceFunction(value)}
            >
              {ownersOfHouse.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="furniture"
            rules={[{ required: true, message: "Выберите наличие мебели" }]}
          >
            <label className={cls.label__form}>Мебель</label>
            <Select
              placeholder="Выберите"
              allowClear
              onChange={(value) => furnitureFunction(value)}
            >
              {furnitures.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="Payment"
            rules={[{ required: true, message: "Выберите вид платежа" }]}
          >
            <label className={cls.label__form}>Вид платежа</label>
            <Select
              placeholder="Выбрать"
              allowClear
              onChange={(value) => paymentTypeFunction(value)}
            >
              {paymentOption.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="StatusObject"
            rules={[{ required: true, message: "Выберите статус объекта" }]}
          >
            <label className={cls.label__form}>Статус объекта</label>
            <Select
              placeholder="Выбрать"
              allowClear
              onChange={(value) => objectStatusFunction(value)}
            >
              {statusObject.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </HocAdaptiveWrapper>
              <AIdescription/>
        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item
            name="PriceForm"
            rules={[{ required: true, message: "Введите цену" }]}
          >
            <label className={cls.label__form}>Цена</label>
            <InputNumber
              min={1}
              name="Price Form"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => priceSomFunction(value)}
            />
          </Form.Item>

          <Form.Item
            name="PriceOnHands"
            rules={[{ required: true, message: "Введите цену руки" }]}
          >
            <label className={cls.label__form}> Цена руки</label>
            <InputNumber
              min={1}
              name="Price on hands"
              placeholder="0"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => form.setFieldsValue({ PriceOnHands: value })}
            />
          </Form.Item>
        </HocAdaptiveWrapper>

        <Form.Item name="agentNote">
          <label className={cls.label__form}>
            Примечание от владельца / агента (* не отображается в интерфейсе
            гостей)
          </label>
          <TextArea />
        </Form.Item>

        <Form.Item
          name="Upload"
          rules={[{ required: true, message: "Загрузите фото" }]}
        >
          <label className={cls.label__form}> Фото</label>
          <UploadComponent
            handleValueUpload={handleValueUpload}
            fileList={fileList}
            setFileList={setFileList}
          />
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