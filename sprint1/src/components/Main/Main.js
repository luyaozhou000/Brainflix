import React from "react";
import Header from "../Header/Header";
import { mainVideo, sideVideo } from "../../data/data";
import MainVideo from "../MainVideo/MainVideo";
import MainVideoDes from "../MainVideoDes/MainVideoDes";
import Side from "../SideVideo/Side";
import "./Main.scss";

// this Main is like a parent component which sends data to its
// child components: MainVideo, MainVideoDes(CommentCard), Side

{/* use addEventListener on <Form> to display new comment on the page: 
       STEP 1: in child MainVideoDes, when submit event occurs, function whenSubmitted runs---which runs handelSubmit in parent Main;
       STEP 2: in paren Main, handleSubmit grabs new comment, changes the state
       STEP 3:  MainVideoDes re-renders, CommentCard re-renders*/}

console.log(mainVideo);

// state stores the data which will be sent to child components:
class Main extends React.Component {
  
  state = {
    mainVideo: mainVideo,
    sideVideo: sideVideo
  }


// declare a func to handle submit event:
handleSubmit = (event) => {
     event.preventDefault();
     const value = event.target.input.value;

     const today = new Date();
     const current = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear() ;
   

    //  add new comment to the beginning of the array: also need to ensure added obj has exactly the same 
    // key value pairs
     this.state.mainVideo.comments.unshift(
      {
                name: "New User",
                comment: value,
                id: "6de7cf31-c9eb-411f-ab19-06e1ede4a4d6",
                timestamp: current,
            }
    );
  
    // NOTE: use this.setState to actually change the state:
    this.setState(this.state);
    // or this.setState(mainVideo)-- this will also change the state
    console.log(mainVideo)
    // see how you enter a new comment --> now the comments array has 4 items
}

  render() {
    return (
      <>
        <Header />

        <MainVideo mainVideo={this.state.mainVideo} />

        {/* below main-container div was added afterwards to use flex for desktop site */}
        <div className="main-container">
          
          <div className="mainVideo-wrapper">
            {/*  state changes, MainVideoDes re-renders */}
            <MainVideoDes mainVideoDes={this.state.mainVideo} whenSubmitted={this.handleSubmit}/>
          </div>

          <div className="sideVideoList">
            <h4 className="sideVideoList__title">Next Video</h4>
            {this.state.sideVideo.filter(item => item.id != "9").map(item => (<Side data={item} />))}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
