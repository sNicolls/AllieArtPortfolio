import AWS from 'aws-sdk'
// const config = require ('./config.json')




(async function() {
    try{

        AWS.config.setPromisesDependency();
        AWS.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: 'us-east-1'
        });

        const s3 = new AWS.S3();
        const response = await s3.listObjectsV2({
            Bucket: 'allieallday-testbucket'
        }).promise()


    } catch (e) {
        console.log("our error", e)
    }
    debugger;
})();