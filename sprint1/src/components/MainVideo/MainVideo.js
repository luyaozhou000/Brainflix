import React from 'react';
import "./MainVideo.scss"
import videoPlayBtn from '../../Assets/Icons/SVG/Icon-play.svg'
import videoVolumeBtn from '../../Assets/Icons/PNG/Icon-volume.png'
import fullscreenBtn from "../../Assets/Icons/PNG/Icon-fullscreen.png"

class MainVideo extends React.Component {

    
   render () {
    console.log(this.props.mainVideo)
     return (
      <div className="MainVideo">

        <video className="MainVideo__video" poster={this.props.mainVideo.image} src={this.props.mainVideo.video}> </video> 
         
        <div className="MainVideo__video-btnContainer">
         
           <div className="playBtn-background">
              <img className="playBtn" src={videoPlayBtn}/>
           </div>

           
           <div className="progressBar"> </div>
          

           <div className="loader-volume-background">
              <img className="loaderBtn" src={fullscreenBtn}/>
          
              <img className="volumeBtn" src={videoVolumeBtn}/>
           </div>

        </div> 
    
      </div>
     )
   }
}




export default MainVideo;