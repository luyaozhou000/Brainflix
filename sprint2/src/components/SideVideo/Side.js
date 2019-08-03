import React from "react";
import "./Side.scss";
import { Link } from 'react-router-dom';


class Side extends React.Component {
  render() {
    return (
      <Link to={`/video/${this.props.data.id}`}>
        
      <div className="sideVideo">
        <img className="sideVideo__img" src={this.props.data.image} alt="sideVideo" />
        <div className="sideVideo__description">
          <div className="sideVideo__description--title">{this.props.data.title}</div>
          <div className="sideVideo__description--channel">{this.props.data.channel}</div>
        </div>
      </div>
    </Link> 
    );
  }
}

export default Side;
