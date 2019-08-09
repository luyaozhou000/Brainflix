import React from "react";
import "./CommentCard.scss";

class CommentCard extends React.Component {



  render() {
    
    const date = new Date(this.props.data.timestamp);
    const dateFormatted = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

    return (
      <div className="commentCard">
        <div className="commentCard__icon"> </div>

        <div className="commentCard__comments">
           <div className="commentCard__comments--container">
             <div className="commentCard__comments--container name">{this.props.data.name}</div>
             <div className="commentCard__comments--container date">{dateFormatted}</div>
           </div>

           <div className="commentCard__comments--commentText">{this.props.data.comment}</div>
        </div>
      </div>
    );
  }
}

export default CommentCard;
