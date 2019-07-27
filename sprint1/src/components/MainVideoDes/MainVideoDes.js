import React from "react";
import { mainVideo } from "../../data/data";
import views from "../../Assets/Icons/PNG/Icon-views.png";
import favs from "../../Assets/Icons/PNG/Icon-likes.png";
import mohan from "../../Assets/Images/Mohan-muruge.jpg";
import "./MainVideoDes.scss";
import Form from "../Form/Form";
import CommentCard from "../CommentCard/CommentCard";

class MainVideoDes extends React.Component {
  render() {
    return (
      <>
        <div className="mainVideoDescription">
          <h2 className="mainVideoDescription__title">
            {this.props.mainVideoDes.title}
          </h2>
          <div className="mainVideoDescription__topContainer">
            <div className="mainVideoDescription__topContainer--channel">
              {this.props.mainVideoDes.channel}
            </div>
            <div className="mainVideoDescription__topContainer--date">
              {this.props.mainVideoDes.timestamp}
            </div>
          </div>

          <div className="mainVideoDescription__bottomContainer">
            <div className="mainVideoDescription__bottomContainer--left">
              <img src={views} />
              <div>{this.props.mainVideoDes.views}</div>
            </div>

            <div className="mainVideoDescription__bottomContainer--right">
              <img src={favs} />
              <div>{this.props.mainVideoDes.likes}</div>
            </div>
          </div>

          <div className="mainVideoDescription__text">{this.props.mainVideoDes.description}</div>
        </div>

        {/* a div form-container used to format items inside */}
        <div className="form-container">
          <h4 className="comment-form-title">3 Comments</h4>

          <form className="comment-form">
            <img className="comment-form__img" src={mohan} />

            <div className="comment-form__wrapper">
              <label className="comment-form__wrapper--label">
                Join the Conversation
                <input className="comment-form__wrapper--input" type="text" />
              </label>

              <button className="comment-form__wrapper--button" type="submit">
                COMMENT
              </button>
            </div>
          </form> 
        </div>


        {/* use CommentCard component to create 3 comments */}
        {this.props.mainVideoDes.comments.map(item => (
              <CommentCard data={item} />
            ))}
      
      </>
    );
  }
}

export default MainVideoDes;
