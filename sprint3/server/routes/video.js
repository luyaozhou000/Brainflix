const express = require('express');
const router = express.Router();
const sideVideo = require('../data/sideVideo.json');
const mainVideo = require('../data/mainVideo.json');
const uuid = require('uuid/v1');



router.get('/',(req, res) => {
    res.send(sideVideo);
    
})

// post to server...
router.post('/', (req,res) => {

    const { body } = req;

    const newSide = {...body, 
               id: uuid(), 
               channel: "New User Channel",
               
    };

    sideVideo.push(newSide);
    console.log("this is a new side video",newSide);
    console.log(newSide.id);
    console.log(sideVideo); 
    res.status(201).json(newSide);

    // push to main
    // const newMain = {...body,
    //                id: newSide.id,
    //                channel: "New User Channel",
    //                views: "1,001,023",
    //                likes: "110,985",
    //                video: "https://project-2-api.herokuapp.com/stream",
    //                timestamp: 1545162149000,
    //                comments: [
    //         {
    //             name: "Micheal Lyons",
    //             comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
    //             id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
    //             likes: 0,
    //             timestamp: 1545162149000
    //         },
    //         {
    //             name: "Gary Wong",
    //             comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    //             id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
    //             likes: 0,
    //             timestamp: 1544595784046
    //         },
    //         {
    //             name: "Theodore Duncan",
    //             comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    //             id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
    //             likes: 0,
    //             timestamp: 1542262984046
    //         }
    //     ]
    // }

    // console.log("this is new main", newMain);
    // mainVideo.push(newMain);
    // res.status(201).json(newMain);
    

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