const app = require('./utils/app');

// UTILS
const databaseConnect = require('./utils/dbConnect');
const errorHandler = require('./middleware/errorHandler');

// DATABASE CONNECTION //
databaseConnect();


// DEFAULT ERROR HANDLERS //
app.use(errorHandler);

app.all("*", (req, res) => {
    res.json({
        "message": "No route found"
    });
})

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
});