import React, { useEffect, useState } from "react";
import cls from "./AntdForm.module.scss";
import { Button, Form, Select, InputNumber, Input, Switch } from "antd";
import { MyLoader, RoomButton, UploadComponent } from "../../../shared/ui";
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
import { useDispatch, useSelector } from "react-redux";
import { ADS_POST_ASYNC } from "../../../app/providers/Redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";

const AntdForm = () => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const notifySuccessAddAds = (title) => toast.success(title);
  const { loading } = useSelector((state) => state.ads);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log(values);
    dispatch(ADS_POST_ASYNC(values));
    form.resetFields();
    setFileList([]);
    notifySuccessAddAds("Вы успешно добавили объявление!", {
      containerId: "success-add-ads",
    });
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

  const handleValueRooms = (e) => {
    form.setFieldsValue({ Rooms: e?.target?.value });
  };

  const [fileList, setFileList] = useState([]);

  const districtArray = [];

  const handleValueDistrict = (name) => {
    if (!districtArray.includes(name)) {
      districtArray.push(name);
      form.setFieldsValue({ Districts: districtArray });
    }
  };

  const handleValueUpload = () => {
    form.setFieldsValue({ Upload: fileList });
  };

  const validatePhoneNumber = (rule, value, callback) => {
    const phoneNumberRegex = /^996\d{9}$/;
    if (!phoneNumberRegex.test(value)) {
      callback("Пожалуйста, введите номер телефона в формате: 996XXXXXXXXX");
    } else {
      callback();
    }
  };

  return (
    <>
      {loading && <MyLoader />}
      <ToastContainer enableMultiContainer containerId={"success-add-ads"} />
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
              onChange={(value) => form.setFieldsValue({ typeOfDeal: value })}
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
              onChange={(value) => form.setFieldsValue({ TipNedvishki: value })}
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
            <RoomButton handleValueRooms={handleValueRooms} />
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
              onChange={(value) => form.setFieldsValue({ PloshadM2: value })}
            />
          </Form.Item>
          <Form.Item
            name="Floor"
            rules={[{ required: true, message: "Выберите этаж" }]}
          >
            <label className={cls.label__form}>Этаж</label>
            <Select
              onChange={(value) => form.setFieldsValue({ Floor: value })}
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
              onChange={(value) => form.setFieldsValue({ TotalFloor: value })}
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
            onChange={(e) =>
              form.setFieldsValue({ ownerName: e.target.defaultValue })
            }
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
            <label className={cls.label__form}>Телефон владельца</label>
            <InputNumber
              placeholder="Введите номер владельца"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => form.setFieldsValue({ TelNumber: value })}
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
              onChange={(e) =>
                form.setFieldsValue({ StreetAround: e.target.value })
              }
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
              onChange={(value) => form.setFieldsValue({ Sostoyanie: value })}
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
              onChange={(value) => form.setFieldsValue({ Documents: value })}
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
              onChange={(value) =>
                form.setFieldsValue({ communication: value })
              }
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
              onChange={(value) => form.setFieldsValue({ TypeOffer: value })}
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
              onChange={(value) => form.setFieldsValue({ furniture: value })}
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
              onChange={(value) => form.setFieldsValue({ Payment: value })}
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
              onChange={(value) => form.setFieldsValue({ StatusObject: value })}
            >
              {statusObject.map((el) => (
                <Option key={el.name} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </HocAdaptiveWrapper>
        <label className={cls.label__form}>Описание</label>
        <Form.Item
          name="Texteditor"
          rules={[{ required: true, message: "Введите описание" }]}
        >
          <div className={cls.AntdForm__textArea__Wrapper}>
            <Button className={cls.AntdForm__btn}>СОЗДАТЬ И ОПИСАНИЕ</Button>
            <TextArea />
          </div>
        </Form.Item>
        <HocAdaptiveWrapper screenWidth={screenWidth}>
          <Form.Item
            name="PriceForm"
            rules={[{ required: true, message: "Введите цену" }]}
          >
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
              onChange={(value) => form.setFieldsValue({ PriceForm: value })}
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
