import React, { useState } from "react";
import { Button, Modal } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckboxesDistrict from "./Checboxes/CheckboxesDistrict";
// import cls from './ModalOfCheckboxes.scss'
const ModalOfCheckboxes = ({data , label,handleValueDistrict}) => {
  const [open, setOpen] = useState(false);

  return (
      <>
      <h5 style={{
          margin:0
      }}>{label}</h5>
        <Button  style={{width:'100%', border:"2px solid #6CA5DC" }} onClick={() => setOpen(true)}>
          Выбрать
          <KeyboardArrowDownIcon />
        </Button>
        <Modal
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          closable={false}
          width={1000}
          footer={[
            <Button
              key="submit"
              type="primary"
              onClick={() => setOpen(false)}
              style={{ width: "100%" }}
            >
              ОК
            </Button>
          ]}
        >
          <CheckboxesDistrict handleValueDistrict={handleValueDistrict} data={data} />
        </Modal>
      </>
  );
};

export default ModalOfCheckboxes;
