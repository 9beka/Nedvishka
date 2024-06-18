import React, { useState, useRef } from "react";
import { Modal, Upload, Button, Slider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AvatarEditor from "react-avatar-editor";

const ImageUploadAndCrop = ({
  visible,
  onClose,
  onUpload,
  handleDeleteImageProfile,
  delete_loading,
}) => {
  const [file, setFile] = useState(null);
  const [zoom, setZoom] = useState(1);
  const editorRef = useRef(null);

  const beforeUpload = (file) => {
    setFile(file);
    return false;
  };

  const handleCrop = () => {
    if (editorRef.current) {
      editorRef.current.getImageScaledToCanvas().toBlob((blob) => {
        onUpload(blob);
        onClose();
      });
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Загрузить фото</div>
    </div>
  );

  return (
    <Modal
      title="Измените фото профиля"
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Закрыть
        </Button>,
        <Button
          key="delete"
          danger
          onClick={handleDeleteImageProfile}
          loading={delete_loading}
        >
          Удалить
        </Button>,
        <Button key="submit" type="primary" onClick={handleCrop}>
          Загрузить
        </Button>,
      ]}
    >
      {file ? (
        <>
          <AvatarEditor
            ref={editorRef}
            image={file}
            width={250}
            height={250}
            border={50}
            borderRadius={125}
            scale={zoom}
          />
          <Slider
            min={1}
            max={2}
            step={0.1}
            defaultValue={1}
            onChange={(value) => setZoom(value)}
          />
        </>
      ) : (
        <Upload beforeUpload={beforeUpload} showUploadList={false}>
          {uploadButton}
        </Upload>
      )}
    </Modal>
  );
};

export default ImageUploadAndCrop;
