import React from 'react';
import { DefaultPLayer as Video } from 'react-html5video';
import ReactPlayer from 'react-player'


const Player = () => {
    return (
        
            <ReactPlayer width={"450px"} height={"350px"} playIcon url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
        
    );

}

export default Player