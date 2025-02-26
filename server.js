const express= require('express')
const app =express()

const port=4000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("working")
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    if(!email){
        return res.status(500).json({message:"Email cannot be empty"})
    }
    if(!password){
        return res.status(500).json({message:"Password cannot be empty"})
    }
    res.status(201).json("Data send successfully")
})

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})