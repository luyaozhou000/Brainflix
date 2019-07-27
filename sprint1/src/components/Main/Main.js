import React from 'react';
import Header from '../Header/Header';
import {mainVideo, sideVideo} from '../../data/data';
import MainVideo from '../MainVideo/MainVideo';
import MainVideoDes from '../MainVideoDes/MainVideoDes';
import Side from '../SideVideo/Side';
import './Main.scss'

// this Main is like a parent component which sends data to its
// child components: MainVideo, MainVideoDes(CommentCard), Side

class Main extends React.Component {
     
    state = {
        mainVideo: mainVideo,
        sideVideo: sideVideo
    }

    render () {

        console.log(this.state.mainVideo)
        console.log(this.state.sideVideo)
      return (
        <>
          <Header />
          <MainVideo mainVideo={this.state.mainVideo} />
          
          <MainVideoDes mainVideoDes={this.state.mainVideo}/>


           {/*  create side video list */}
          <div className="sideVideoList"> 
            <h4 className="sideVideoList__title">Next Video</h4>
            {this.state.sideVideo.filter(item =>item.id != '9').map(item => <Side data={item}/>)}
          </div>
       
           
        </>
      )

    }



}

export default Main;
