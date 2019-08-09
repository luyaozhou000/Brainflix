import React from "react";
import Header from "../Header/Header";
// import searchLogo from "../../Assets/Icons/SVG/Icon-search.svg";
// import plusSign from "../../Assets/Icons/SVG/Icon-upload.svg";
// import mohan from "../../Assets/Images/Mohan-muruge.jpg";

import UploadVideo from '../UploadVideo/UploadVideo';


class Upload extends React.Component {
    render() {
        return(
            <>
            <Header/>
            <UploadVideo />
            </>
        )
    }
}








export default Upload