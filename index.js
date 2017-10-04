var api_key = 'key-3d9709a5f97486c6ce8bb09cc8f26d5c';
var sending_domain = 'sandbox3d603fef70dc4a3db61d4f9de9854c46.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: sending_domain});


exports.processForm =  function processForm(req, res) {
    query = req.query;
 var data = {
    from: query.fname + ' ' + query.lname + ' <' + decodeURIComponent(query.email) + '>',
    to: 'zach@protechig.com',
    subject: 'New Submission From ' + query['fname'] + ' ' + query['lname'] ,
    text: decodeURIComponent(query.message)
}
   console.log(query);
    mailgun.messages().send(data, function (error, body) {
          res.send(body);

    });
};
