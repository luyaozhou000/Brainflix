const express = require('express');
const app = express();
const cors = require('cors');
const videoRoutes = require('./routes/video.js');


// middleware...
app.use(cors());
app.use(express.json());



// testing...
app.get('/', (req, res) => {
    res.send("hello you")
})

// set up base route...
app.use('/video', videoRoutes);








app.listen(8080, () => {
    console.log('server is running');
} )
