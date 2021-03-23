const express = require('express');


const app = express();

// function rootCall(req, res){
//     res.send('Thank you')
// }

// const rootCall=(req, res)=>res.send('Thank you')
        
    

app.get('/',(req, res)=>{
    res.send('Thank you for calling me')
} )

app.listen(3000, ()=>console.log('listening to port 3000'))