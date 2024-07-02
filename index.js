const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const port = 3000;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect('mongodb+srv://admin:admin@backenddb.xtklk0g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() =>{
    console.log('Connected to the database');
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`);
    });
})
.catch(() =>{
    console.log('Connection failed');
});