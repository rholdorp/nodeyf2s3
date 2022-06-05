const AWS = require("aws-sdk");

const s3 = new AWS.S3();

(async () => {
  await s3
    .putObject({
      Body: "hello world",
      Bucket: "ndbrgrd-ws-data",
      Key: "my_file.txt",
    })
    .promise();
})();
