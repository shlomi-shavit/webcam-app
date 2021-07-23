import React, { useState, useRef, useEffect } from 'react';
import  { useHistory } from 'react-router-dom';
import classes from './Video.module.scss';
import Score from "../DataLayer/DataLayer";

function Video() {
    const [playing, setPlaying] = useState(false);
    const timer = 60000;
    let history = useHistory();
    const videoElement = useRef(null);

    const startVideo = () => {

        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = videoElement.current;
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    };

    const stopVideo = () => {
        setPlaying(false);
        let video = videoElement.current;
        history.push('/thank-you');
        return video ? video.srcObject.getTracks()[0].stop() : '';
    };

    useEffect(() => {
        startVideo();

        const stopVideoTimer = setTimeout(() => {
            stopVideo()
        }, timer);

        return () => clearTimeout(stopVideoTimer);
    }, []);

    return (
        <div>
            <div className={classes.video_container}>
                <video
                    poster="https://i.gifer.com/PYBr.gif"
                    muted
                    autoPlay
                    height={500}
                    width={320}
                    ref={videoElement}
                    className={classes.video}
                ></video>
                <Score timer={timer}/>
            </div>
        </div>
    );
}

export default Video;