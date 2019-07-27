import React from "react";
import "./Side.scss";

class Side extends React.Component {
  render() {
    return (
      <div className="sideVideo">
        <img className="sideVideo__img" src={this.props.data.image} />
        <div className="sideVideo__description">
          <div className="sideVideo__description--title">{this.props.data.title}</div>
          <div className="sideVideo__description--channel">{this.props.data.channel}</div>
        </div>
      </div>
    );
  }
}

export default Side;
