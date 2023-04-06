
require('dotenv').config();
const user= process.env.DBUSERNAME
const pass=process.env.DBPASSWORD
module.exports ={
    mongoDbUrl: `mongodb://${user}:${pass}@ac-smldgiv-shard-00-00.jtl8pab.mongodb.net:27017,ac-smldgiv-shard-00-01.jtl8pab.mongodb.net:27017,ac-smldgiv-shard-00-02.jtl8pab.mongodb.net:27017/?ssl=true&replicaSet=atlas-lh1t6l-shard-0&authSource=admin&retryWrites=true&w=majority`
}