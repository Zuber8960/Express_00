const path = require('path');

exports.contactUsPage = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
};

exports.successPage = (req, res, next) => {
    res.send('<body><h1>Congratulations !<br>Form filled Successfully<br>You will be contacted shortly.<br>😊💻👍<h1></body>')
};

