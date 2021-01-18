const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    return { "message": "Successfully executed" };
    try {
        let data = await ddb.put({
            TableName: "feedback",
            Item: {
                Name: name,
                Email: email,
                Feedback: feedback
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };
};