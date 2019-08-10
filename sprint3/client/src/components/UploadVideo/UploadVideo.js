import React from "react";
// import { Link } from "react-router-dom";
import previewer from "../../Assets/Images/Upload-video-preview.jpg";
import "./UploadVideo.scss";

class UploadVideo extends React.Component {

  
  render() {
    return (
      <div className="uploadVideo">
        <h2 className="uploadVideo__topTitle">Upload Video</h2>

        {/* img-form-wrapper and img-wrapper were inserted afterwards to format desktop size */}
        <div className="img-form-wrapper">
         <div className="img-wrapper">
          <h4 className="uploadVideo__subTitle">Video Thumbnail</h4>
          <img className="uploadVideo__thumbnail--img" src={previewer} alt="uploadThumbnail"/>
         </div>

         <form onSubmit={this.props.whenVideoSubmitted} className="uploadVideo__form">
          <label className="uploadVideo__form--lableTop">
            title your video
            <input className="inputTitle" type="text" name="videoTitle" />
          </label>

          <label className="uploadVideo__form--lableBottom">
            add a video description
            <input className="inputDescription" type="text" name="videoDes" />
          </label>
 
          <div className="button-wrapper">
           <button className="uploadVideo__form--button" type="submit">PUBLISH</button>
           <button className="uploadVideo__form--cancelButton" type="submit">CANCEL</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default UploadVideo;
