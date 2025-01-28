// const test = () => {
//     console.log('Inside test function');
// }

// test();

const express = require('express');
const app = express();
const PORT = 3000;


app.listen(port, () => {
    console.log(`Running express app on ${PORT}`);
})
