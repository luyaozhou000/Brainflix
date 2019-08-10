import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import marvel from "../../Assets/Images/marvel-hero.jpg";

// import searchLogo from "../../Assets/Icons/SVG/Icon-search.svg";
// import plusSign from "../../Assets/Icons/SVG/Icon-upload.svg";
// import mohan from "../../Assets/Images/Mohan-muruge.jpg";

import UploadVideo from '../UploadVideo/UploadVideo';


class Upload extends React.Component {

  
  handelVideoSubmit = (event) => {
       event.preventDefault();

       const videoTitle = event.target.videoTitle.value;
       const videoDescription = event.target.videoDes.value;
       console.log(videoTitle, videoDescription);

       axios.post("http://localhost:8080/video/", {
           title: videoTitle,
           description: videoDescription,
           image: marvel
          
       }).then(console.log("post success"))
       .catch(error => console.log("error posting"));
  }


    render() {
        return(
            <>
            <Header/>
            <UploadVideo whenVideoSubmitted={this.handelVideoSubmit}/>
            </>
        )
    }
}








export default Upload