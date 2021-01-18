const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {

    let tabledetails = event.Records[0].dynamodb;
    console.log(tabledetails);

    let name = tabledetails.NewImage.Name.S;
    let email = tabledetails.NewImage.Email.S;
    let feedback = tabledetails.NewImage.Feedback.S;
    let messagebody = 'Hi' + ' ' + name + '! Thank you for your feedback'
    try {
        let data = await ses.sendEmail({
            Source: "info@test3r.com",
            Destination: {
                ToAddresses: ['mina@test3r.com'],
                CcAddresses: ['mansour@test3r.com']
            },
            Message: {
                Subject: {
                    Data: "Thx for feedback"
                },
                Body: {
                    Html: {
                        Data: messagebody
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};