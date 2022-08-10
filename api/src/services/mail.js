const Mailjet = require('node-mailjet')
const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
);
const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
        "Messages": [
            {
                "From": {
                    "Email": "saranvlmna@gmail.com",
                    "Name": "dev"
                },
                "To": [
                    {
                        "Email": "saranvlmna@gmail.com",
                        "Name": "dev"
                    }
                ],
                "Subject": "Welcome to vLmNa!",
                "TextPart": "",
                "HTMLPart": "",
                "CustomID": ""
            }
        ]
    })
request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
