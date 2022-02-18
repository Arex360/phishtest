const {SetData} = require('./Database')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser())
app.post('/post',(req,res)=>{
    const {profile,email,password} = req.body
    console.log(profile)
    SetData({
        key: profile,
        value: {
            email: email,
            password: password
        }
    })
    res.send('hello')
})
app.get('/',(req,res)=>res.send('hi'))
app.listen(3000,()=>console.log('server started'))