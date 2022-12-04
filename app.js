const path = require('path');
const errorController = require('./controllers/error');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRouter = require('./routes/contact-us')
const successRouter = require('./routes/success');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(contactRouter);
app.use(shopRoutes);
app.use(successRouter);

app.use(errorController.getError);

app.listen(3000);
