const AWS = require('/home/travis/.nvm/versions/node/v10.16.0/lib/node_modules/aws-sdk');


var cloudfront = new AWS.CloudFront({
  apiVersion: '2019-03-26',
  accessKeyId: process.argv[2],
  secretAccessKey: process.argv[3]
});


const params = {
  DistributionId: 'E1RAFQHDRH1L86',
  InvalidationBatch: {
    CallerReference: '' + new Date().getTime(),
    Paths: {
      Quantity: 1,
      Items: [
        '/*',
      ]
    }
  }
};

console.log(1);

cloudfront.createInvalidation(params,(err, data)=>{
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});