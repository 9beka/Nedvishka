import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import "./ModalOfCheckboxes.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckboxesDistrict from "./Checboxes/CheckboxesDistrict";
const ModalOfCheckboxes = () => {
  const [open, setOpen] = useState(false);
  return (
      <>
        <Button  style={{ border:"2px solid #6CA5DC" }} onClick={() => setOpen(true)}>
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
          <CheckboxesDistrict />
        </Modal>
      </>
  );
};

export default ModalOfCheckboxes;
