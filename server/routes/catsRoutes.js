const mongoose = require('mongoose');
const Cats = mongoose.model('cats');

module.exports = (app) => {
    app.get('/api/cats', async (request, response) => {
        try {
            const cats = await Cats.find({});

            response.send(cats);
        }
        catch (error) {
            response.send(error.message);
        }
    });
}