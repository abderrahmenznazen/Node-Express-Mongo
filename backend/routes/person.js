const { query } = require('express')
let express=require('express')
let router = express.Router()

/*router.get('/person', (req, res)=>{
    res.send('you have requested a person')
})*/


// QueryString=>quary property on the request object
//localhost:3000/person?name=rhayem
router.get('/person', (req, res)=>{
    if(req.query.name) {
        res.send(`you have requested ${req.query.name}`)
    }
    else{
        res.send('you have requested a person')
    }
})
//parems property on the request object
//passer les  parametres par params
//localhost:3000/person/name 
router.get('/person/:name', (req, res)=>{
    res.send(`you have requested ${req.params.name}`)
})

router.get('/error', (req,res)=>{
    throw new Error('this is a forced error')
})

module.exports = router