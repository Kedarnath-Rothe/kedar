require('dotenv').config(); 
const express = require('express');
const { route } = require('./router/auth-router');
const authRouth = require('./router/auth-router');
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/service-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require('cors');
const adminRoute = require('./router/admin-router');

const app = express();

//lets tackle cors policy
const corsOptions = {
    origin : "http://localhost:5173",
    methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credential : true,
}

app.use(cors(corsOptions));

app.use(express.json())                                          //Express middleware handles the json data

app.use('/api/auth', authRouth);                                      //Go to the auth-router.js run thes code on /api/auth/.....

app.use('/api/form', contactRoute);

app.use('/api/data', serviceRoute);

app.use('/api/admin', adminRoute);


app.use(errorMiddleware);

const port = process.env.PORT || 8080;

// connectDB
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port : ${port} `);
    })
})







// https://thapatechnical.shop/courses/worlds-best-mern-stack-course/659f8b028bf4f8313eafd135/659f8b028bf4f8313eafd140