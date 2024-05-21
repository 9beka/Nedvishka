import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import cls from "../../AntdForm.module.scss"
  const AIdescription = () => {
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
   return (
   <>
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
   </>
   );
};

export default AIdescription;