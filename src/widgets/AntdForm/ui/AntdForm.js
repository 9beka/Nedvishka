import React, { useEffect, useState } from 'react';
import cls from './AntdForm.module.scss';
import { Button, Form, Select, InputNumber, Input } from 'antd';
import { RoomButton, SelectChecboxes } from '../../../shared/ui';
import { nameOfMainDistrict, SelectData } from '../../../shared/constants';
import ModalOfCheckboxes from '../../../features/ui/ModalOfCheckboxes/ModalOfCheckboxes';
import MediaQuery from 'react-responsive';

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

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
                <Form
                    form={form}
                    name="min 992"
                    onFinish={onFinish}
                    style={{
                        padding: 20,
                        background: 'rgba(1,1,1,0.5)',
                        display: 'grid',
                        gridTemplateColumns: `${screenWidth <= 768 ? 'repeat(1,1fr)' : 'repeat(2,1fr)' }` ,
                        alignItems: 'center',
                        gridColumnGap: 20,
                        borderRadius: 15,
                        maxWidth: `${screenWidth <= 768 ? '100%' : screenWidth <= 992  ?  '100%' : '50%'}`,
                    }}
                >
                    <Form.Item>
                        <label className={cls.label__form}>Укажите тип недвижимости</label>
                        <Select placeholder="Выберите из списка" allowClear>
                            <Option value="secondary">Вторичная</Option>
                            <Option value="houses">Дома и Участки</Option>
                            <Option value="commercial">Коммерческая</Option>
                            <Option value="elite">Элитка</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <label className={cls.label__form}>Количество комнат</label>
                        <RoomButton />
                    </Form.Item>
                    <Form.Item>
                        <label className={cls.label__form}>Район</label>
                        <ModalOfCheckboxes data={nameOfMainDistrict} />
                    </Form.Item>
                    <Form.Item>
                        <label className={cls.label__form}>Стоимость</label>
                        <InputNumber
                            min={1}
                            placeholder="0"
                            style={{
                                width: '100%',
                                border: '2px solid #6CA5DC',
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <label className={cls.label__form}>Серия</label>
                        <SelectChecboxes data={SelectData} />
                    </Form.Item>
                    <Form.Item>
                        <label className={cls.label__form}>Ваши контакты</label>
                        <Input style={{ border: '2px solid #6CA5DC' }} placeholder="Ваш телефон" />
                    </Form.Item>
                    <Form.Item>
                        <label className={cls.label__form}>Ваше имя</label>
                        <Input style={{ border: '2px solid #6CA5DC' }} placeholder="Ваше имя" />
                    </Form.Item>
                    <Form.Item>
                        <label className={cls.label__form}>Описание недвижимости</label>
                        <TextArea
                            style={{ border: '2px solid #6CA5DC' }}
                            rows={1}
                            placeholder={'Описание недвижимости'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            Добавить объявление
                        </Button>
                    </Form.Item>
                </Form>

        </>
    );
};

export default AntdForm;
