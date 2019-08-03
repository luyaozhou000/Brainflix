import React from "react";
// import { Link } from "react-router-dom";
import previewer from "../../Assets/Images/Upload-video-preview.jpg";
import "./UploadVideo.scss";

class UploadVideo extends React.Component {
  render() {
    return (
      <div className="uploadVideo">
        <h2 className="uploadVideo__topTitle">Upload Video</h2>
        <h4 className="uploadVideo__subTitle">Video Thumbnail</h4>
        
        <img className="uploadVideo__thumbnail--img" src={previewer} alt="uploadThumbnail"/>
        

        <form className="uploadVideo__form">
          <lable className="uploadVideo__form--lableTop">
            title your video
            <input className="inputTitle" type="text" name="videoTitle" />
          </lable>

          <lable className="uploadVideo__form--lableBottom">
            add a video description
            <input className="inputDescription" type="text" name="videoDes" />
          </lable>

          <button className="uploadVideo__form--button" type="submit">PUBLISH</button>
          <button className="uploadVideo__form--cancelButton" type="submit">CANCEL</button>
        </form>
      </div>
    );
  }
}

export default UploadVideo;
