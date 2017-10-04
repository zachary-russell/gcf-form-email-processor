# Google Cloud Functions Form Emailer
This is a  Google Cloud Function script that will send an email with contact information once a form is submitted. This uses MailGun to send the actual email.

## How to use
This can be configured using 2 easy steps:

1. Configure variables for `api_key` and `sending_domain` from MailGun account.
2. Send a POST request to your Google Cloud Function address with the following query strings:

`fname` = First Name

`lname` = Last Name

`email` = Email Address

`message` = Contact Message

An example request:

`https://some-function-name.cloudfunctions.net/formProcessor?fname=Zach&lname=Russell&email=zach%40protechig.com&message=Hello+World`
