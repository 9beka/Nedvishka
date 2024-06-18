import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { uploadFileToS3 } from "./UploadAWSS3";

const UploadComponent = ({
  fileList,
  setFileList,
  handleValueUpload,
  maxFiles,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    handleValueUpload();
  }, [fileList ,handleValueUpload]);
  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewOpen(true);
  };

  const handleRemove = (file) => {
    const newFileList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(newFileList);
  };
  const handleBeforeUpload = async (file) => {
    try {
      const uploadResult = await uploadFileToS3(file);
      console.log(`message.success${file.name} file uploaded successfully`);
      console.log("Upload Result:", uploadResult);
      if (!uploadResult.Location) {
        throw new Error("Failed to get upload location");
      }
      const newFileList = [
        ...fileList,
        {
          uid: file.uid,
          name: `${Date.now()}_${file.name}`,
          status: "done",
          url: uploadResult.Location,
          thumbUrl: uploadResult.Location,
        },
      ];

      console.log(newFileList);
      setFileList(newFileList.slice(0, maxFiles));
      handleValueUpload();
    } catch (error) {
      return console.log(`error${file.name} file uploaded error` ,error);
    }
    return false;
  };

  // const handleChange = ({fileList: newFileList}) => {
  //     handleValueUpload();
  //     setFileList(newFileList.slice(0, maxFiles));
  // };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  console.log(fileList);
  return (
    <>
      <Upload
        listType="picture-card"
        accept="image/*"
        fileList={fileList}
        onPreview={handlePreview}
        onRemove={handleRemove}
        beforeUpload={handleBeforeUpload}
      >
        {fileList.length >= maxFiles ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          width={300}
          src={previewImage}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
          }}
        />
      )}
    </>
  );
};

export default UploadComponent;
