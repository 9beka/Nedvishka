import React, {useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {Image, Upload} from "antd";

const UploadComponent = ({
                             fileList,
                             setFileList,
                             handleValueUpload,
                             maxFiles,
                         }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");

    const handlePreview = async (file) => {
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = ({fileList: newFileList}) => {
        handleValueUpload();
        setFileList(newFileList.slice(0, maxFiles));
    };

    const handleRemove = (file) => {
        const newFileList = fileList.filter((item) => item.uid !== file.uid);
        setFileList(newFileList);
    };

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    return (
        <>
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                accept="image/*"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                onRemove={handleRemove}
            >
                {fileList.length >= maxFiles ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    width={200}
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
