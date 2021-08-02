let mongoose = require('mongoose')

/*const server = 'cluster0.u3lly.mongodb.net'
const dataBase = 'myFirstDatabase?retryWrites=true&w=majority'
const user = 'rhayem'
const password = '20007303'


mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${dataBase}`)*/
mongoose.connect(`mongodb+srv://rhayem:20007303@cluster0.ai7kj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

let CustomerSchema = new mongoose.Schema({
    name : String,
    email : {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)