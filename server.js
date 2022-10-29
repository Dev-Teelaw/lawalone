const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const cors = require('cors');




app.get('/', cors(), function(req, res){
    res.json({slackUsername: 'beestech', backend: true, age : 26, bio:"i am lawal toheeb ayoola who wish to be a world class software devolper"})

})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})

app.use(cors({
    origin: '*',
    methods: 'GET'

})); 
