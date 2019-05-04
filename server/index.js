const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
mongoose.connect(keys.MONGO_URL);

require('./models/Cats');
require('./routes/catsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');

    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000);