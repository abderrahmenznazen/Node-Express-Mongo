//appeler la bibiliotheque express
let express = require ('express')
//creation d'une application express
let app = express ()

let path=require('path')

let personRoute = require('./routes/person')

let customerRouter =require('./routes/customer')

let bodyParser = require('body-parser')

app.use(bodyParser.json())

//middelware
//Sat Jul 31 2021 17:39:16 GMT+0100 (heure normale d’Europe centrale)=> /person?name=rhayem
app.use((req, res, next)=>{
    console.log(`${new Date().toString()}=> ${req.originalUrl}`, req.body)
    next()
})

app.use(personRoute)
app.use(customerRouter)
//gestion des fichier static
app.use(express.static('media'))

//listen to port machine 
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.info(`server haz started on ${PORT}`))

//hander for error 404
app.use((req, res, next)=>{
    res.status(404).send('we think you are lost!')
})

//handler for error 500
app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.sendFile(path.join(__dirname, './media/500.html'))
})