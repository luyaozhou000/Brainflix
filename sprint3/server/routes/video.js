const express = require('express');
const router = express.Router();
const sideVideo = require('../data/sideVideo.json');
const mainVideo = require('../data/mainVideo.json');
// const uuid = require('uuid/v1');


router.get('/',(req, res) => {
    res.send(sideVideo);
    
})



router.get('/:id', (req, res ) => {

    let result = null;
    for (let i = 0; i< mainVideo.length; i++) {
        if (req.params.id === mainVideo[i].id) {
            result = mainVideo[i]
        }
    }

    res.send(result);
    console.log(result)
}
   
)




module.exports = router