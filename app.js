const express = require('express');
console.log(__dirname)

// Express App
const app = express();

// Listen for requests
app.listen(3000);

app.get('/', (req, res)=>{
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res)=>{
    res.sendFile('./views/about.html', { root: __dirname })
})

// Redirects
app.get('/about-us',(req, res)=>{
    res.redirect('/about')
})

// 404 Page
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})