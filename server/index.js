const express = require('express')
const app=express()

//跨域
app.use(require('cors')())
app.use(express.json())


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/self-evaluation',{
	useNewUrlParser:true,
	useFindAndModify:true,
	useCreateIndex:true,
})

const Class=mongoose.model('Class',new mongoose.Schema({
	title:{type:String},
	body:{type:String},
}))

app.get('/',async(req,res)=>{
	res.send('index')
})
//新增
app.post('/api/classes',async(req,res)=>{
	const class=await Class.create(req.body)
	req.send(class)
})

app.listen(3001,()=>{
	console.log('http://localhost:3001/')
})