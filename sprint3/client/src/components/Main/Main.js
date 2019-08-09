import React from "react";
import Header from "../Header/Header";
// import { mainVideo, sideVideo } from "../../data/data";
import MainVideo from "../MainVideo/MainVideo";
import MainVideoDes from "../MainVideoDes/MainVideoDes";
import Side from "../SideVideo/Side";
import "./Main.scss";

import Axios from "axios";

class Main extends React.Component {
  // NOTE: can also put an empty comments array in mainVideo to avoid .map error:
  state = {
    mainVideo: {},
    sideVideo: []
  };

  getVideos() {
    console.log("this 2 happens ");
    Axios.get("http://localhost:8080/video/")
      .then(response => {
        console.log(response.data);

        this.setState({
          sideVideo: response.data
        });

        this.getVideoDetails("1af0jruup5gu");
        console.log("did this happen after 2??");
      })
      .catch(error => console.log("error"));
  }

  getVideoDetails(idOfVideo) {
    console.log("this 3 happens ");
    const url = `http://localhost:8080/video/${idOfVideo}`;
    Axios.get(url)
      .then(res => {
        this.setState({
          mainVideo: res.data
        });
      })
      // console.log("updating mainvideo....")
      .catch(error => console.log("error2"));
  }

  componentDidMount() {
    console.log("this 1 happens first");
    this.getVideos();
  }

  componentDidUpdate() {
    console.log("component is updating");

    // console.log(this.state.mainVideo.id);
    console.log(this.props.match.params.id);
    if (this.state.mainVideo.id !== this.props.match.params.id) {
      Axios.get(
        `http://localhost:8080/video/${
          this.props.match.params.id
        }?api_key=luyao`
      )
        .then(res => {
          // console.log(this.props.match.params);
          // console.log("this 4 happens ");
          // update state of parent component,remember to put curly braces:
          this.setState({
            mainVideo: res.data,
            
          });
        })
        .catch(error => console.log("error"));
    }

  }

  // *********** Diving Deeper:  declare a func to handle submit event: this is not working!!!
  // NEED TO FIX THIS!!!!!!!!!!!

  handleSubmit = event => {
    event.preventDefault();
    const value = event.target.input.value;

    if (this.state.mainVideo.id) {
      console.log('axios post')
      Axios.post(
        `https://project-2-api.herokuapp.com/videos/${this.state.mainVideo.id}/comments?api_key=luyao`,
        {
          name: "New User",
          comment: value
        })
      .then(this.getVideoDetails(this.state.mainVideo.id))
      .catch(error => console.log("error posting"));
    }
  };

  render() {
    console.log("this is after render", this.state.mainVideo);
    console.log(this.state.sideVideo);
    return (
      <>
        <Header />

        <MainVideo mainVideo={this.state.mainVideo} />

        {/* below main-container div was added afterwards to use flex for desktop site */}
        <div className="main-container">
          <div className="mainVideo-wrapper">
            <MainVideoDes
              mainVideoDes={this.state.mainVideo}
              whenSubmitted={this.handleSubmit}
            />
          </div>

          <div className="sideVideoList">
            <h4 className="sideVideoList__title">Next Video</h4>
            {this.state.sideVideo
              .filter(item => item.id != this.state.mainVideo.id)
              .map(item => (
                <Side key={item.id} data={item} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
