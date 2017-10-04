var api_key = 'your-api-key-here',
    sending_domain = 'your-sending-domain-here',
    mailgun = require('mailgun-js')({apiKey: api_key, domain: sending_domain});


exports.processForm =  function processForm(req, res) {
    var query = req.query;
        fname = decodeURIComponent(query['fname']),
        lname = decodeURIComponent(query['lname']),
        email = decodeURIComponent(query['email']),
        message = decodeURIComponent(query['message']),
        data = {
            from: fname + ' ' + lname + ' <' + email + '>',
            to: 'zach@protechig.com',
            subject: 'New Submission From ' + fname + ' ' + lname ,
            text: message
        }

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            return res.send(error);
        }
        res.send(body);

    });
};
