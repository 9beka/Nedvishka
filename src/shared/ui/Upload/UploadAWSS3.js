import AWS from "aws-sdk"

AWS.config.update({
   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
   region: process.env.REACT_APP_AWS_REGION
 });

 const s3 = new AWS.S3();

 export const uploadFileToS3 = (file) => {
  const rootFolder = "murasNedvishka";
  const encodedName = encodeURIComponent(file.name);
  const fileName = `${Date.now().toString()}-${encodedName}`;
  const finalPath = `${rootFolder}/${fileName}`;
   const params = {
     Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
     Key: finalPath,
     Body: file,
     ContentType: file.type
   };
 
   return s3.upload(params).promise();
 };