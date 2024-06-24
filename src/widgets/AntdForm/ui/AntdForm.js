import React, { useEffect, useState } from "react";
import cls from "./AntdForm.module.scss";
import { Button, Form, Select, InputNumber, Input } from "antd";
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
  allComplexNames,
} from "../../../shared/constants";
import ModalOfCheckboxes from "../../../features/ui/ModalOfCheckboxes/ModalOfCheckboxes";
import { floorsArray } from "../../../shared/constants";
import TextArea from "antd/es/input/TextArea";
import HocAdaptiveWrapper from "./HocAdaptiveWrapper";
import { useDispatch, useSelector } from "react-redux";
import { ADS_POST_ASYNC } from "../../../app/providers/Redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";

const AntdForm = () => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const [textAreaValue, setTextAreaValue] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [rooms, setRooms] = useState(null);
  const [area, setArea] = useState("");
  const [floor, setFloor] = useState("");
  const [totalFloor, setTotalFloor] = useState("");
  const [yourName, setYourName] = useState("");
  const [ownersPhoneNumber, setOwnersPhoneNumber] = useState("");
  const [districts, setDistricts] = useState([]);
  const [complex, setComplex] = useState([]);

  const [streetCrossing, setStreetCrossing] = useState("");
  const [state, setState] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [communicationsState, setCommunicationsState] = useState([]);
  const [typeOfSentence, setTypeOfSentence] = useState("");
  const [furniture, setFurniture] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [objectStatus, setObjectStatus] = useState("");
  const [priceSom, setPriceSom] = useState("");

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleButtonClick = () => {
    const newText = `
    Тип сделки: ${transactionType}
    Тип недвижимости: ${propertyType}
    Комнаты: ${rooms}
    Площадь: ${area} м2
    Этаж: ${floor} / ${totalFloor}
    Ваше имя: ${yourName}
    Телефон владельца: +${ownersPhoneNumber}
    Районы: ${districts}
    Пересечение улиц: ${streetCrossing}
    Состояние: ${state}
    Документы: ${documentation}
    Коммуникации: ${communicationsState}
    Тип предложения: ${typeOfSentence}
    Мебель: ${furniture}
    Вид платежа: ${paymentType}
    Статус объекта: ${objectStatus}
    Цена: ${priceSom} сом`;
    setTextAreaValue(textAreaValue + newText);
  };

  const notifySuccessAddAds = (title) =>
    toast.success(title, {
      containerId: "success-add-ads",
    });

  const { loading } = useSelector((state) => state.ads);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log(values , "values from antdForm");
    dispatch(ADS_POST_ASYNC(values));
    // form.resetFields();
    // setFileList([]);
    // setYourName("");
    // setTextAreaValue("");
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

  const handleValueRooms = (e) => {
    console.log(e.target.value);
    const value = e?.target?.value;
    form.setFieldsValue({ Rooms: value });
    setRooms(value);
  };

  const handleValueDistrict = (name) => {
    if (!districts.includes(name)) {
      const districtArray = [...districts, name];
      form.setFieldsValue({ Districts: districtArray });
      setDistricts(districtArray);
    }
  };

  const handleValueComplex = (name) => {
    if (!complex.includes(name)) {
      const complexArray = [...complex, name];
      form.setFieldsValue({ Complex: complexArray });
      setComplex(complexArray);
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

  const transactionTypeFunction = (value) => {
    form.setFieldsValue({ typeOfDeal: value });
    setTransactionType(value);
  };

  const propertyTypeFunction = (value) => {
    form.setFieldsValue({ TipNedvishki: value });
    setPropertyType(value);
  };

  const areaFunction = (value) => {
    form.setFieldsValue({ PloshadM2: value });
    setArea(value);
  };

  const floorFunction = (value) => {
    console.log(value);
    form.setFieldsValue({ Floor: value });
    setFloor(value);
  };

  const totalFloorFunction = (value) => {
    form.setFieldsValue({ TotalFloor: value });
    setTotalFloor(value);
  };

  const yourNameFunction = (e) => {
    const value = e.target.value;
    form.setFieldsValue({ ownerName: value });
    setYourName(value);
  };

  const ownersPhoneNumberFunction = (value) => {
    form.setFieldsValue({ TelNumber: value });
    setOwnersPhoneNumber(value);
  };

  const streetCrossingFunction = (e) => {
    const value = e.target.value;
    form.setFieldsValue({ StreetAround: value });
    setStreetCrossing(value);
  };

  const stateFunction = (value) => {
    form.setFieldsValue({ Sostoyanie: value });
    setState(value);
  };

  const documentationFunction = (value) => {
    form.setFieldsValue({ Documents: value });
    setDocumentation(value);
  };

  const communicationsStateFunction = (value) => {
    form.setFieldsValue({ communication: value });
    setCommunicationsState(value);
  };

  const typeOfSentenceFunction = (value) => {
    form.setFieldsValue({ TypeOffer: value });
    setTypeOfSentence(value);
  };

  const furnitureFunction = (value) => {
    form.setFieldsValue({ furniture: value });
    setFurniture(value);
  };

  const paymentTypeFunction = (value) => {
    form.setFieldsValue({ Payment: value });
    setPaymentType(value);
  };

  const objectStatusFunction = (value) => {
    form.setFieldsValue({ StatusObject: value });
    setObjectStatus(value);
  };

  const priceSomFunction = (value) => {
    form.setFieldsValue({ PriceForm: value });
    setPriceSom(value);
  };

  return (
    <>
      {loading && <MyLoader />}
      <ToastContainer containerId="success-add-ads" />
      <ToastContainer containerId="error-add-ads" />

      <Form
        form={form}
        name="min 992"
        onFinish={onFinish}
        encType="multipart/form-data"
        onError={() =>
          notifySuccessAddAds("Произошла ошибка при добавлении объявления!")
        }
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
            <label className={cls.label__form}>Телефон владельца</label>
            <InputNumber
              placeholder="Введите номер владельца"
              className={cls.AntdForm__InputNumber}
              onChange={(value) => ownersPhoneNumberFunction(value)}
            />
          </Form.Item>

          <Form.Item name="additionTelNumber">
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
            name="Complex"
            rules={[{ required: true, message: "Выберите жилые комплекс(ы)" }]}
          >
            <label className={cls.label__form}>Жилые комплекс</label>
            <ModalOfCheckboxes
              handleValueDistrict={handleValueComplex}
              data={allComplexNames}
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
              mode={"multiple"}
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
        <label className={cls.label__form}>Описание</label>
        <Form.Item
          name="Texteditor"
          rules={[{ required: true, message: "Введите описание" }]}
        >
          <div className={cls.AntdForm__textArea__Wrapper}>
            <Button className={cls.AntdForm__btn} onClick={handleButtonClick}>
              СОЗДАТЬ ИИ ОПИСАНИЕ
            </Button>
            <TextArea value={textAreaValue} onChange={handleTextAreaChange} />
          </div>
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
            maxFiles={12}
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
