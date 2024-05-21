import React from "react";
import { Button, Empty } from "antd";
const AntdEmpty = ({ description, btn_text }) => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={<span>{description}</span>}
  >
    <Button type="primary">{btn_text}</Button>
  </Empty>
);
export default AntdEmpty;
