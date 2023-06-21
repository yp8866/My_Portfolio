const express=require('express');
const app=express();
const path=require('path');
const port=80;

app.use(express.static(path.join(__dirname,"Public")))
// app.get('/services.html',(req,res)=>{
//     res.sendFile(path.join(__dirname,"/Public/services.html"));
// })
app.listen(port,()=>{
    console.log(`The server running `);
})
