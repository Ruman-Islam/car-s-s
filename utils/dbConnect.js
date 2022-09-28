require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

// ? Database connection configuration mongoose //
const databaseConnect = () => {
    mongoose
        .connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database connected successfully!');
            app.listen(port, () => {
                console.log(`CARSERVICE server is running on: ${port}`);
            });
        })
        .catch(err => console.log('Error message -', err))
};
// ? ...................... //

module.exports = databaseConnect;