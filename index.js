const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/',(req,res)=>res.send("Debendra sahu my code is cossuss i am very happy"));
app.get('/api', (req,res) => {
    res.json({ message:"yjj",
               message2: 'Hello World'}]);
});
app.listen(port,()=> console.log("port:" + port));
