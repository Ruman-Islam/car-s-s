const express = require('express');
const cors = require('cors');
const app = express();


// IMPORTING APPLICATION ROUTES
const service_get_routes = require('../routes/v1/get.route');
const service_post_routes = require('../routes/v1/post.route');
const service_patch_routes = require('../routes/v1/patch.route');

// APPLICATION MIDDLEWARE //
app.use(cors());
app.use(express.json());
// ...................... //


app.get("/", (req, res) => {
    res.send("Route is working!");
});

// APPLICATION ROUTES //
app.use('/api/v1',
    service_get_routes,
    service_post_routes,
    service_patch_routes,
);


// ...................//

module.exports = app;