const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


const users = [
    {id:1, name:'Sabana', email:'sabana32@gmail.com'},
    {id:2, name:'Sabnur', email:'sabanu11@gmail.com'},
    {id:3, name:'Hassan Ali', email:'shassanali45@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/users', (req,res)=>{
    res.send(users)
})

app.post('/users', (req,res)=>{
    console.log('post api hit')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })