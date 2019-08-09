import mainPic from '../Assets/Images/video-list-0.jpg';
import video from "../Assets/Video/BrainStation Sample Video.mp4";

import sideVideo1 from '../Assets/Images/video-list-1.jpg';
import sideVideo2 from '../Assets/Images/video-list-2.jpg';
import sideVideo3 from '../Assets/Images/video-list-3.jpg';
import sideVideo4 from '../Assets/Images/video-list-4.jpg';
import sideVideo5 from '../Assets/Images/video-list-5.jpg';
import sideVideo6 from '../Assets/Images/video-list-6.jpg';
import sideVideo7 from '../Assets/Images/video-list-7.jpg';
import sideVideo8 from '../Assets/Images/video-list-8.jpg';


const mainVideo = {
    id: '9',
    title: 'BMX Rampage: 2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight yearsafter his first Red Cow Rampage title',
    channel: 'By Red Cow',
    image:  mainPic,
    views: '1,001,023',
    likes: '110,985',
    duration: 'type of <string>',
    video: video,
    timestamp: '12/18/2018',
    comments: [
        {
            name: "Micheal Lyons",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            id: "6de7cf31-c9eb-411f-ab19-06e1ede4a4d6",
            timestamp: '12/18/2018'
        },
        {
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            id: "d1f13184-0600-4e0f-ae97-517a56b443cc",
            timestamp: '12/18/2018'
        },
        {
            name: "Theodore Duncan",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            id: "938d7fa6-d5cd-4edf-87a9-ae60f16b3fd9",
            timestamp: '12/18/2018'
        }
    ]
};

const sideVideo = [
    {
        id: '1', 
        title: 'Become A Travel Pro In One Easy Lesson...',
        channel: 'Scotty Cranmer', 
        image: sideVideo1 
    },
    {
        id: '2', 
        title: 'Les Houches The Hidden Gem Of The...', 
        channel: 'Scotty Cranmer', 
        image: sideVideo2 
    },
    {
        id: '3', 
        title: 'Travel Health Useful Medical Information…', 
        channel: 'Scotty Cranmer', 
        image: sideVideo3 
    },
    {
        id: '4', 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        channel: 'Emily Harper', 
        image: sideVideo4
    },
    {
        id: '5', 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        channel: 'Ethan Owen', 
        image: sideVideo5
    },
    {
        id: '6', 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez', 
        image: sideVideo6
    },
    {
        id: '7', 
        title: 'Cruising Destination Ideas', 
        channel: 'Timothy Austin', 
        image: sideVideo7
    },
    {
        id: '8', 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image: sideVideo8 
    },
    {
        id: '9', 
        title: 'BMX Rampage: 2018 Highlights', 
        channel: 'By Red Cow', 
        image: mainPic 
    }

]




export {mainVideo, sideVideo}