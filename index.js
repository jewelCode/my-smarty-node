const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome Jewel Barya Hy hello asdfsadfsdf asdfsadf hoasdfsd adfasdfasdf sadfsdfdfsdf');
})

const users = [
    {id: 1, name: 'Jewel', email: 'jewelbarua37@gmail.com', phone: '01823262226'},
    {id: 2, name: 'shabnur', email: 'shabnur37@gmail.com', phone: '01823262226'},
    {id: 3, name: 'Suchrita', email: 'suchrita37@gmail.com', phone: '01823262226'},
    {id: 4, name: 'monia', email: 'mon@gmail.com', phone: '01823262226'},
    {id: 5, name: 'mahiha', email: 'mahina37@gmail.com', phone: '01823262226'},
    {id: 6, name: 'keya', email: 'keyabarua7@gmail.com', phone: '01823262226'},
    {id: 7, name: 'tonmo', email: 'tonmoy@gmail.com', phone: '01823262226'},
]

app.post('/users', (req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
    
  
})

app.post('/user', (req, res) =>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})
app.get('/user/:id', (req, res) =>{
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.listen(port, () =>{
    console.log('listening on port', port);
});