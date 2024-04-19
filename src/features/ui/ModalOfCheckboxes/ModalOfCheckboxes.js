import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckboxesDistrict from "./Checboxes/CheckboxesDistrict";
const ModalOfCheckboxes = ({data , label}) => {
  const [open, setOpen] = useState(false);
  return (
      <>
      <h5>{label}</h5>
        <Button  style={{width:'100%', border:"2px solid #6CA5DC" }} onClick={() => setOpen(true)}>
          Выбрать
          <KeyboardArrowDownIcon />
        </Button>
        <Modal
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={800}
          closable={false}
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
          <CheckboxesDistrict data={data} />
        </Modal>
      </>
  );
};

export default ModalOfCheckboxes;
