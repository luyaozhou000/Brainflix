import React from "react";
import Header from "../Header/Header";
// import { mainVideo, sideVideo } from "../../data/data";
import MainVideo from "../MainVideo/MainVideo";
import MainVideoDes from "../MainVideoDes/MainVideoDes";
import Side from "../SideVideo/Side";
import "./Main.scss";

import Axios from 'axios';


class Main extends React.Component {
  
// *********** Diving Deeper:  declare a func to handle submit event:
// handleSubmit = (event) => {
//      event.preventDefault();
//      const value = event.target.input.value;

//      this.state.mainVideo.comments.push(
//       {
//                 name: "New User",
//                 comment: value,
//                 id: "6de7cf31-c9eb-411f-ab19-06e1ede4a4d6",
//                 timestamp: '12/18/2018'
//             }
//     );
//     this.setState(mainVideo);
//     console.log(mainVideo)
// }
     
// NOTE: can also put an empty comments array in mainVideo to avoid .map error:
state = {
  mainVideo: { },
  sideVideo: []
}


getVideos() {
  console.log('this 2 happens ');
  Axios.get('https://project-2-api.herokuapp.com/videos?api_key=luyao')
       .then (response => {
      
          console.log(response.data);

          this.setState({
            sideVideo: response.data
          })
          
          this.getVideoDetails("1af0jruup5gu")
          console.log('did this happen after 2??')
         })
         .catch(error =>
          console.log('error'))
 }


getVideoDetails(idOfVideo) {
  console.log('this 3 happens ');
  const url= `https://project-2-api.herokuapp.com/videos/${idOfVideo}?api_key=luyao`
  Axios.get(url)
      .then(res => {
       
        // update state of parent component,remember to put curly braces:
        this.setState({
          mainVideo: res.data,
      })
      })
      .catch(error =>
        console.log('error'))
      
}


 componentDidMount() {
  console.log('this 1 happens first');
  this.getVideos();
  
  }


  componentDidUpdate() {
    console.log('component is updating');
    console.log(this.state.mainVideo.id);
    console.log(this.props.match.params.id);
    if (this.state.mainVideo.id !== this.props.match.params.id ) {
        Axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=luyao`)
          .then(res => {
        
            console.log(this.props.match.params)
            console.log('this 4 happens ');
            // update state of parent component,remember to put curly braces:
            this.setState({
              mainVideo: res.data,
          })
          })
          .catch(error =>
            console.log('error'))
  }
}
 
  render() {
    console.log('this is after render',this.state.mainVideo);
    console.log(this.state.sideVideo);
    return (
      <>
        <Header />

        <MainVideo mainVideo={this.state.mainVideo} />

        {/* below main-container div was added afterwards to use flex for desktop site */}
        <div className="main-container">
          
          <div className="mainVideo-wrapper">
            <MainVideoDes mainVideoDes={this.state.mainVideo} whenSubmitted={this.handleSubmit}/>
          </div>
           
          <div className="sideVideoList">
            <h4 className="sideVideoList__title">Next Video</h4>
            {this.state.sideVideo.filter(item => item.id != this.state.mainVideo.id).map(item => (<Side key={item.id} data={item} />))}
          </div>
        </div>
      </>
    );
  }
}




export default Main;
