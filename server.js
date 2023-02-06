const express = require('express')
const app = express()
const port =  80 || 443 || 9
const path = require('path')
// const getDate = require('./middleware/getDate')
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Routes
app.use('/api', require('./routes/apiRoutes'))




// to use the styles, or anything out of the public folder
// app.use(express.static('public'));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });

app.listen(port, console.log(
    "API communication trainings - Get the unix time"
))