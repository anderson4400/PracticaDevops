const  express = require('express');
const  app = express()

app.get('/',(req, res) =>res.send('Hello DevOps'));

app.listen(3000, () =>{
    console.log('My RES API running on port 3000!');
})