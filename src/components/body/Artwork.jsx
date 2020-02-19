
import React from 'react';
import './styles.scss';
const aws = require('aws-sdk')
const config = require ('../../assets/javaScript/config.json')


export default class Artwork extends React.Component {


    render() {


        (async function() {
            try{
        
                aws.config.setPromisesDependency();
                aws.config.update({
                    accessKeyId: config.accessKeyId,
                    secretAccessKey: config.secretAccessKey,
                    region: 'us-east-1'
                });
        
                const s3 = new aws.S3();
                const response = await s3.listObjectsV2({
                    Bucket: 'allieallday-testbucket'
                }).promise()
        
        
            } catch (e) {
                console.log("our error", e)
            }
        })();




        return (
            <div>
              
            </div>
          );
    };
  
};

