// const test = () => {
//     console.log('Inside test function');
// }

// test();

const express = require('express');
const app = express(express.json());
const PORT = 3000;


app.get('/api', (req, res) => {
    res.send('API is working');
});

app.get('/home', (req, res) => {
    res.send(__dirname+'/views/home.html');
});


app.listen(PORT, () => {
    console.log(`Running express app on ${PORT}`);
})

// create a simple student CRUD
// send response code
// do error hanlding

