const AWS = require("aws-sdk");

const s3 = new AWS.S3();

(async () => {
  await s3
    .putObject({
      Body: "hello team westminster",
      Bucket: "fmpchihanlin",
      Key: "my-file.txt",
    })
    .promise();
})();

